package repository

import (
	"github.com/connthass/connthass/api/entity"
)

// EventRepository Model interface
type EventRepository interface {
	SearchEvents(entity.Fields, entity.Query, entity.Page, entity.PerPage) ([]entity.Event, *entity.Error)
	FindByID(entity.EventID) (*entity.Event, *entity.Error)
}
