package presenter

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port/server"
)

type GroupPresenter struct {
	server.GroupOutputPort
}

func NewGroupPresenter() *GroupPresenter {
	return &GroupPresenter{}
}

func (g *GroupPresenter) GetGroupByID(group *entity.Group) (*server.GetGroupByIDResponse, *entity.Error) {
	res := &server.GetGroupByIDResponse{
		Group: group,
	}
	return res, nil
}
