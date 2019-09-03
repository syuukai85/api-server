package gateway

import (
	"errors"
	"fmt"
	"net/http"
	"strconv"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
)

const (
	eventNotFound   = "イベントが見つかりませんでした"
	addEventFailure = "イベントの作成に失敗しました"
)

// Event DBモデルとやり取りをする
type Event struct {
	db *gorm.DB
}

// NewEvent コンストラクタ
func NewEvent() *Event {
	return &Event{
		db: orm.GetDB(),
	}
}

func entityEventIDToUint(entityEventID entity.EventID) uint64 {
	envetID, _ := strconv.ParseUint(fmt.Sprint(entityEventID), 10, 64)
	return envetID
}

func eventIDToEntityEventID(eventID uint64) entity.EventID {
	return entity.EventID(strconv.FormatUint(eventID, 10))
}

// SearchEvents 検索条件からイベントを検索する
func (e *Event) SearchEvents(fields entity.Fields, query entity.Query, page entity.Page, perPage entity.PerPage) ([]entity.Event, *entity.Error) {
	// fmt.Println(query)
	// events := []model.Event{}
	// e.db.Offset(page).Limit(perPage).Select(fields).Find(&events)

	// TODO: モデルからエンティティに変換する

	return make([]entity.Event, 0), nil
}

// FindByID IDからイベントを検索する
func (e *Event) FindByID(eventID entity.EventID) (*entity.Event, *entity.Error) {
	var event model.Event
	var group model.Group
	var venue model.Venue
	var categories []model.Category

	stringEventID := fmt.Sprint(eventID)
	firstEvent := e.db.First(&event, stringEventID)

	if firstEvent.RecordNotFound() {
		return nil, &entity.Error{
			Code:   http.StatusNotFound,
			Errors: []string{eventNotFound}}
	}

	firstEvent.Related(&group)
	firstEvent.Related(&venue)
	firstEvent.Related(&categories, "Categories")

	gatewayUser := NewUser(e.db)
	entityEvent := &entity.Event{
		ID:               entity.EventID(stringEventID),
		ColorCode:        event.ColorCode,
		Title:            event.Title,
		Description:      event.Description,
		Capacity:         event.Capacity,
		ImageURL:         event.ImageURL,
		QRCodeURL:        event.QRCodeURL,
		HoldStartDate:    event.HoldStartDate,
		HoldEndDate:      event.HoldEndDate,
		RecruitStartDate: event.RecruitStartDate,
		RecruitEndDate:   event.RecruitEndDate,
		Group:            groupToEntity(group),
		Venue:            venueToEntity(venue),
		Entries:          gatewayUser.findGeneralByEventID(stringEventID),
		Organizer:        gatewayUser.findOrganizerByEventID(stringEventID),
		Categories:       categoriesToEntities(categories),
	}

	return entityEvent, nil
}

// AddEvent イベント追加
func (e *Event) AddEvent(entityEvent *entity.Event) (*entity.Event, *entity.Error) {
	event := model.Event{
		Title:            entityEvent.Title,
		Description:      entityEvent.Description,
		Capacity:         entityEvent.Capacity,
		ImageURL:         entityEvent.ImageURL,
		QRCodeURL:        entityEvent.QRCodeURL,
		HoldStartDate:    entityEvent.HoldStartDate,
		HoldEndDate:      entityEvent.HoldEndDate,
		RecruitStartDate: entityEvent.RecruitStartDate,
		RecruitEndDate:   entityEvent.RecruitEndDate,
	}
	event.ColorCode = entityEvent.ColorCode
	groupID := entityGroupIDToUint(entityEvent.Group.ID)
	venueID := entityVenueIDToUint(entityEvent.Venue.ID)

	data, err := orm.TransactAndReturnData(e.db, func(tx *gorm.DB) (interface{}, error) {
		if len(entityEvent.Group.ID) != 0 && tx.First(&model.Group{}, groupID).RecordNotFound() {
			return nil, errors.New(addEventFailure)
		}

		if len(entityEvent.Venue.ID) != 0 && tx.First(&model.Venue{}, venueID).RecordNotFound() {
			return nil, errors.New(addEventFailure)
		}

		event.GroupID = groupID
		event.VenueID = venueID
		tx.Create(&event)
		if tx.NewRecord(event) {
			return nil, errors.New(addEventFailure)
		}
		entityEventID := eventIDToEntityEventID(event.ID)
		_, generalEntryErr := entryEventTransact(entityEvent.Entries, entityEventID, entity.GeneralEntryID)(tx)
		_, organizerEntryErr := entryEventTransact(entityEvent.Organizer, entityEventID, entity.OrganizerEntryID)(tx)
		_, eventCategoryErr := createEventCategoriesTransact(entityEvent.Categories, entityEventID)(tx)
		if generalEntryErr != nil || organizerEntryErr != nil || eventCategoryErr != nil {
			return nil, errors.New(addEventFailure)
		}

		return entityEvent, nil

	})

	if err != nil {
		return nil, &entity.Error{
			Code:   http.StatusNotFound,
			Errors: []string{err.Error()},
		}
	}

	return data.(*entity.Event), nil
}
