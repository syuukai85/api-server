package interactor

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port/repository"
	"github.com/connthass/connthass/api/usecase/port/server"
)

type Group struct {
	OutputPort server.GroupOutputPort
	Repository repository.GroupRepository
}

// NewGroup constractor
func NewGroup(
	outputPort server.GroupOutputPort,
	repository repository.GroupRepository,
) *Group {
	return &Group{
		OutputPort: outputPort,
		Repository: repository,
	}
}

// GetGroupByID イベントID検索
func (e *Group) GetGroupByID(params *server.GetGroupByIDRequestParams) (*server.GetGroupByIDResponse, *entity.Error) {
	res, err := e.Repository.FindByID(params.GroupID)
	if err != nil {
		return nil, err
	}
	return e.OutputPort.GetGroupByID(res)
}
