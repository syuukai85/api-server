package port

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/port"
)

type EventModelRepository interface {
	SearchEvents() ([]entity.Event, Error)
	Find() (entity.Event, Error) 
}