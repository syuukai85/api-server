package gateway

import (
	// "fmt"

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
	event := model.Event{}

	primaryKey, _ := strconv.Atoi(string(eventID))
	if err := e.db.First(&event, primaryKey).Error; err != nil {
		return &entity.Event{}, nil
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
	}

	return entityEvent, nil
}
