package repository

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port"
)

type EventRepository interface {
	SearchEvents(entity.Fields, entity.Query, entity.Page, entity.PerPage) ([]entity.Event, port.Error)
	FindByID(entity.EventID) (*entity.Event, port.Error)
}
