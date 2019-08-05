package gateway

import (
	"strconv"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/database"
	"github.com/connthass/connthass/api/infrastructure/database/model"
	"github.com/connthass/connthass/api/usecase/port"
	"github.com/jinzhu/gorm"
)

type Event struct {
	db *gorm.DB
}

func NewEvent() *Event {
	return &Event{
		db: database.GetDB(),
	}
}

func (e *Event) SearchEvents(fields entity.Fields, query entity.Query, page entity.Page, perPage entity.PerPage) ([]entity.Event, port.Error) {
	// fmt.Println(query)
	// events := []model.Event{}
	// e.db.Offset(page).Limit(perPage).Select(fields).Find(&events)

	// TODO: モデルからエンティティに変換する

	return make([]entity.Event, 0), nil
}

func (e *Event) FindByID(eventID entity.EventID) (*entity.Event, port.Error) {
	var event model.Event
	var group model.Group
	var venue model.Venue

	var entityCategories []entity.Category
	var entityEntries []entity.User
	var entityOrganizer []entity.User

	primaryKey, _ := strconv.Atoi(string(eventID))
	firstEvent := e.db.First(&event, primaryKey)

	firstEvent.Related(&group)
	firstEvent.Related(&venue)

	entityGroup := entity.Group{
		ID:          entity.GroupID(group.ID),
		Name:        group.Name,
		Description: group.Description,
		Domain:      group.Domain,
		ColorCode:   group.ColorCode,
		ImageURL:    group.ImageURL,
	}

	entityVenue := entity.Venue{
		ID:   entity.VenueID(venue.ID),
		Name: venue.Name,
	}

	entityEvent := &entity.Event{
		ID:               entity.EventID(event.ID),
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
		Group:            entityGroup,
		Venue:            entityVenue,
		Entries: entityEntries,
		Organizer: entityOrganizer,
		Categories: entityCategories,
	}

	return entityEvent, nil
}
