package port

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port"
)

/*
 * Input Port
 *  └─ Interactor で実装、Controller で使用される
 */
type EventInputPort interface {
	SearchEvents(*SearchEventsRequestParams) port.Error
	GetEventByID(*GetEventByIDRequestParams) port.Error
}

type SearchEventsRequestParams struct {
	SearchParams entity.SearchParams
}

type GetEventByIDRequestParams struct {
	EventID entity.EventID
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
	Events entity.Event
}
