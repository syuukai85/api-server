package interactor

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port/repository"
	"github.com/connthass/connthass/api/usecase/port/server"
)

type EntryEvent struct {
	OutputPort server.EntryEventOutputPort
	Repository repository.EntryEventRepository
}

// NewEntryEvent constractor
func NewEntryEvent(
	outputPort server.EntryEventOutputPort,
	repository repository.EntryEventRepository,
) *EntryEvent {
	return &EntryEvent{
		OutputPort: outputPort,
		Repository: repository,
	}
}

// EntryEvent イベント参加
func (ee *EntryEvent) EntryEvent(params *server.EntryEventRequestParams) (*server.EntryEventResponse, *entity.Error) {
	res, err := ee.Repository.CreateEntryEvent(params.EventID, params.EntryEvent)
	if err != nil {
		return nil, err
	}
	return ee.OutputPort.EntryEvent(res)
}
