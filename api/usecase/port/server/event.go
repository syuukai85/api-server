package server

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port"
)

/*
 * Input Port
 *  └─ Interactor で実装、Controller で使用される
 */
type EventInputPort interface {
	SearchEvents(*SearchEventsRequestParams) (*SearchEventsResponse, port.Error)
	GetEventByID(*GetEventByIDRequestParams) (*GetEventByIDResponse, port.Error)
}

type SearchEventsRequestParams struct {
	Fields  entity.Fields
	Query   entity.Query
	Page    entity.Page
	PerPage entity.PerPage
}

type GetEventByIDRequestParams struct {
	EventID entity.EventID
}

type GetEventByID struct {
	EventID string `uri:"eventId" binding:"required"`
}

/*
 * Output Port
 *  └─ Presenter で実装、Interactor で使用される
 */
type EventOutputPort interface {
	SearchEvents([]entity.Event) (*SearchEventsResponse, port.Error)
	GetEventByID(*entity.Event) (*GetEventByIDResponse, port.Error)
}

type SearchEventsResponse struct {
	Events []entity.Event
}

type GetEventByIDResponse struct {
	Event *entity.Event
}
