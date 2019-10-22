package controller

import (
	"github.com/syuukai85/api-server/api/entity"
	"github.com/syuukai85/api-server/api/interface/gateway"
	"github.com/syuukai85/api-server/api/interface/presenter"
	"github.com/syuukai85/api-server/api/usecase/interactor"
	"github.com/syuukai85/api-server/api/usecase/port/server"
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

func (ec *EventController) SearchEvents(params *server.SearchEventsRequestParams) (*server.SearchEventsResponse, *entity.Error) {
	// Input Port の使用
	return ec.InputPort.SearchEvents(params)
}

func (ec *EventController) GetEventByID(params *server.GetEventByIDRequestParams) (*server.GetEventByIDResponse, *entity.Error) {
	// Input Port の使用
	return ec.InputPort.GetEventByID(params)
}

func (ec *EventController) AddEvent(params *server.AddEventRequestParams) (*server.AddEventResponse, *entity.Error) {
	// Input Port の使用
	return ec.InputPort.AddEvent(params)
}
