package interactor

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port/repository"
	"github.com/connthass/connthass/api/usecase/port/server"
)

type Group struct {
	OutputPort      server.GroupOutputPort
	GroupRepository repository.GroupRepository
}

// NewGroup constractor
func NewGroup(
	outputPort server.GroupOutputPort,
	groupRepository repository.GroupRepository,
) *Group {
	return &Group{
		OutputPort:      outputPort,
		GroupRepository: groupRepository,
	}
}

// GetGroupByID イベントID検索
func (e *Group) GetGroupByID(params *server.GetGroupByIDRequestParams) (*server.GetGroupByIDResponse, *entity.Error) {
	res, err := e.GroupRepository.FindByID(params.GroupID)
	if err != nil {
		return nil, err
	}
	return e.OutputPort.GetGroupByID(res)
}
