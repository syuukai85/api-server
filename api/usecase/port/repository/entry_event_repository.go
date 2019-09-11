package repository

import (
	"github.com/connthass/connthass/api/entity"
)

// EntryEventRepository Model interface
type EntryEventRepository interface {
	CreateEntryEvent(entity.EventID, *entity.EntryEvent) (*entity.EntryEvent, *entity.Error)
}
