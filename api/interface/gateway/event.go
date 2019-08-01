
package gateway

import (
	"github.com/connthass/connthass/api/infrastructure/database/model"
	"github.com/connthass/connthass/api/infrastructure/database"
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port"
	"github.com/jinzhu/gorm"
	"fmt"
)

type Event struct {
	db *gorm.DB
}

func NewEvent() *Event {
	return &Event {
		db: database.GetDB(),
	}
}

func (e *Event) SearchEvents(fields entity.Fields, query entity.Query, page entity.Page, perPage entity.PerPage) []entity.Event, port.Error {
	fmt.Println(query)
	events := []model.Event{}
	e.db.Offset(page).Limit(perPage).Select(fields).Find(&events)

	// TODO: モデルからエンティティに変換する

	return events, nil
}

func (e *Event) FindByID(eventID entity.EventID) *entity.Event, port.Error {
	event := model.Event{}
	e.db.First(&event, eventID)

	// TODO: モデルからエンティティに変換する

	return &event
}