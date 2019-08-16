package server

import (
	"github.com/connthass/connthass/api/entity"
)

/*
 * Input Port
 *  └─ Interactor で実装、Controller で使用される
 */
type EventInputPort interface {
	SearchEvents(*SearchEventsRequestParams) (*SearchEventsResponse, *entity.Error)
	GetEventByID(*GetEventByIDRequestParams) (*GetEventByIDResponse, *entity.Error)
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
	SearchEvents([]entity.Event) (*SearchEventsResponse, *entity.Error)
	GetEventByID(*entity.Event) (*GetEventByIDResponse, *entity.Error)
}

type SearchEventsResponse struct {
	Events []entity.Event
}

type GetEventByIDResponse struct {
	Event *entity.Event
}
