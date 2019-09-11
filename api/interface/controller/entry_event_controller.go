package controller

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/interface/gateway"
	"github.com/connthass/connthass/api/interface/presenter"
	"github.com/connthass/connthass/api/usecase/interactor"
	"github.com/connthass/connthass/api/usecase/port/server"
)

type EntryEventController struct {
	InputPort server.EntryEventInputPort
}

func NewEntryEventController() *EntryEventController {
	return &EntryEventController{
		InputPort: interactor.NewEntryEvent(
			presenter.NewEntryEventPresenter(),
			gateway.NewEntryEvent(),
		),
	}
}

func (eec *EntryEventController) EntryEvent(params *server.EntryEventRequestParams) (*server.EntryEventResponse, *entity.Error) {
	return eec.InputPort.EntryEvent(params)
}
