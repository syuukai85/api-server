package server

import (
	"github.com/connthass/connthass/api/entity"
)

/*
 * Input Port
 *  └─ Interactor で実装、Controller で使用される
 */

// EventInputPort Interactorで実装
type EventInputPort interface {
	SearchEvents(*SearchEventsRequestParams) (*SearchEventsResponse, *entity.Error)
	GetEventByID(*GetEventByIDRequestParams) (*GetEventByIDResponse, *entity.Error)
}

// SearchEventsRequestParams Interactorの引数に利用
type SearchEventsRequestParams struct {
	Fields  entity.Fields
	Query   entity.Query
	Page    entity.Page
	PerPage entity.PerPage
}

// GetEventByIDRequestParams Interactorの引数に利用
type GetEventByIDRequestParams struct {
	EventID entity.EventID
}

// EventOutputPort Presenter で実装、Interactor で使用される
type EventOutputPort interface {
	SearchEvents([]entity.Event) (*SearchEventsResponse, *entity.Error)
	GetEventByID(*entity.Event) (*GetEventByIDResponse, *entity.Error)
}

// SearchEventsResponse Presenterの戻り値で利用
type SearchEventsResponse struct {
	Events []entity.Event
}

// GetEventByIDResponse Presenterの戻り値で利用
type GetEventByIDResponse struct {
	Event *entity.Event
}
