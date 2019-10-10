package presenter

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port/server"
)

type HTTPPresenter struct {
	server.EventOutputPort
}

func NewHTTPPresenter() *HTTPPresenter {
	return &HTTPPresenter{}
}

// Output Port の実装
func (p *HTTPPresenter) SearchEvents(events []entity.Event) (*server.SearchEventsResponse, *entity.Error) {
	res := &server.SearchEventsResponse{
		Events: events,
	}
	return res, nil
}

func (p *HTTPPresenter) GetEventByID(event *entity.Event) (*server.GetEventByIDResponse, *entity.Error) {
	res := &server.GetEventByIDResponse{
		Event: event,
	}
	return res, nil
}

func (p *HTTPPresenter) AddEvent(event *entity.Event) (*server.AddEventResponse, *entity.Error) {
	res := &server.AddEventResponse{
		Event: event,
	}
	return res, nil
}
