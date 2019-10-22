package server

import (
	"github.com/syuukai85/api-server/api/entity"
)

// EventInputPort Interactorで実装
type EventInputPort interface {
	SearchEvents(*SearchEventsRequestParams) (*SearchEventsResponse, *entity.Error)
	GetEventByID(*GetEventByIDRequestParams) (*GetEventByIDResponse, *entity.Error)
	AddEvent(*AddEventRequestParams) (*AddEventResponse, *entity.Error)
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

// AddEventRequestParams AddEventエンドポイントの入力
type AddEventRequestParams struct {
	Event *entity.Event
}

// EventOutputPort Presenter で実装、Interactor で使用される
type EventOutputPort interface {
	SearchEvents([]entity.Event) (*SearchEventsResponse, *entity.Error)
	GetEventByID(*entity.Event) (*GetEventByIDResponse, *entity.Error)
	AddEvent(*entity.Event) (*AddEventResponse, *entity.Error)
}

// SearchEventsResponse Presenterの戻り値で利用
type SearchEventsResponse struct {
	Events []entity.Event
}

// GetEventByIDResponse Presenterの戻り値で利用
type GetEventByIDResponse struct {
	Event *entity.Event
}

// AddEventResponse AddEventエンドポイントの出力
type AddEventResponse struct {
	Event *entity.Event
}
