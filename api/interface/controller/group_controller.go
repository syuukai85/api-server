package controller

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/interface/gateway"
	"github.com/connthass/connthass/api/interface/presenter"
	"github.com/connthass/connthass/api/usecase/interactor"
	"github.com/connthass/connthass/api/usecase/port/server"
)

type GroupController struct {
	InputPort server.GroupInputPort
}

func NewGroupController() *GroupController {
	return &GroupController{
		InputPort: interactor.NewGroup(
			presenter.NewGroupPresenter(),
			gateway.NewGroup(nil),
		),
	}
}

func (gc *GroupController) GetGroupByID(params *server.GetGroupByIDRequestParams) (*server.GetGroupByIDResponse, *entity.Error) {
	// Input Port の使用
	return gc.InputPort.GetGroupByID(params)
}
