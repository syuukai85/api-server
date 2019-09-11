package presenter

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port/server"
)

type EventPresenter struct {
	server.EventOutputPort
}

func NewEventPresenter() *EventPresenter {
	return &EventPresenter{}
}

// Output Port の実装
func (ep *EventPresenter) SearchEvents(events []entity.Event) (*server.SearchEventsResponse, *entity.Error) {
	res := &server.SearchEventsResponse{
		Events: events,
	}
	return res, nil
}

func (ep *EventPresenter) GetEventByID(event *entity.Event) (*server.GetEventByIDResponse, *entity.Error) {
	res := &server.GetEventByIDResponse{
		Event: event,
	}
	return res, nil
}

func (ep *EventPresenter) AddEvent(event *entity.Event) (*server.AddEventResponse, *entity.Error) {
	res := &server.AddEventResponse{
		Event: event,
	}
	return res, nil
}
