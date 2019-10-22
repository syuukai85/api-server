package repository

import (
	"github.com/syuukai85/api-server/api/entity"
)

// EventRepository Model interface
type EventRepository interface {
	SearchEvents(entity.Fields, entity.Query, entity.Page, entity.PerPage) ([]entity.Event, *entity.Error)
	FindByID(entity.EventID) (*entity.Event, *entity.Error)
	AddEvent(*entity.Event) (*entity.Event, *entity.Error)
}
