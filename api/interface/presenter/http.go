package presenter

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port"
	"github.com/connthass/connthass/api/usecase/port/server"
)

type HTTPPresenter struct {
	server.EventOutputPort
}

func NewHTTPPresenter() *HTTPPresenter {
	return &HTTPPresenter{}
}

// Output Port の実装
func (p *HTTPPresenter) SearchEvents(events []entity.Event) (*server.SearchEventsResponse, port.Error) {
	res := &server.SearchEventsResponse{}
	res.Events = events
	return res, nil
}

func (p *HTTPPresenter) GetEventByID(event *entity.Event) (*server.GetEventByIDResponse, port.Error) {
	res := &server.GetEventByIDResponse{}
	res.Event = event
	return res, nil
}
