package interactor

import (
	"github.com/syuukai85/api-server/api/entity"
	"github.com/syuukai85/api-server/api/usecase/port/repository"
	"github.com/syuukai85/api-server/api/usecase/port/server"
)

type Event struct {
	OutputPort      server.EventOutputPort
	EventRepository repository.EventRepository
}

// NewEvent constractor
func NewEvent(
	outputPort server.EventOutputPort,
	eventRepository repository.EventRepository,
) *Event {
	return &Event{
		OutputPort:      outputPort,
		EventRepository: eventRepository,
	}
}

// SearchEvents イベント検索
func (e *Event) SearchEvents(params *server.SearchEventsRequestParams) (*server.SearchEventsResponse, *entity.Error) {
	res, err := e.EventRepository.SearchEvents(params.Fields, params.Query, params.Page, params.PerPage)
	if err != nil {
		return nil, err
	}
	// Output Port の使用
	return e.OutputPort.SearchEvents(res)
}

// GetEventByID イベントID検索
func (e *Event) GetEventByID(params *server.GetEventByIDRequestParams) (*server.GetEventByIDResponse, *entity.Error) {
	res, err := e.EventRepository.FindByID(params.EventID)
	if err != nil {
		return nil, err
	}
	return e.OutputPort.GetEventByID(res)
}

// AddEvent 新規イベント追加
func (e *Event) AddEvent(params *server.AddEventRequestParams) (*server.AddEventResponse, *entity.Error) {
	res, err := e.EventRepository.AddEvent(params.Event)
	if err != nil {
		return nil, err
	}
	return e.OutputPort.AddEvent(res)
}
