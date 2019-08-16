package controller

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/interface/gateway"
	"github.com/connthass/connthass/api/interface/presenter"
	"github.com/connthass/connthass/api/usecase/interactor"
	"github.com/connthass/connthass/api/usecase/port/server"
)

type EventController struct {
	InputPort server.EventInputPort
}

func NewEventController() *EventController {
	return &EventController{
		InputPort: interactor.NewEvent(
			presenter.NewHTTPPresenter(),
			gateway.NewEvent(),
		),
	}
}

func (ec *EventController) SearchEvents(params *server.SearchEventsRequestParams) (*server.SearchEventsResponse, entity.Error) {
	// Input Port の使用
	return ec.InputPort.SearchEvents(params)
}

func (ec *EventController) GetEventByID(params *server.GetEventByIDRequestParams) (*server.GetEventByIDResponse, entity.Error) {
	// Input Port の使用
	return ec.InputPort.GetEventByID(params)
}
