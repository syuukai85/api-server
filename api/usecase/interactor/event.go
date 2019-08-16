package interactor

import (
	"github.com/connthass/connthass/api/usecase/port"
	"github.com/connthass/connthass/api/usecase/port/repository"
	"github.com/connthass/connthass/api/usecase/port/server"
)

type Event struct {
	OutputPort      server.EventOutputPort
	EventRepository repository.EventRepository
}

func NewEvent(
	outputPort server.EventOutputPort,
	eventRepository repository.EventRepository,
) *Event {
	return &Event{
		OutputPort:      outputPort,
		EventRepository: eventRepository,
	}
}

// Input Port の実装
func (e *Event) SearchEvents(params *server.SearchEventsRequestParams) (*server.SearchEventsResponse, entity.Error) {
	res, err := e.EventRepository.SearchEvents(params.Fields, params.Query, params.Page, params.PerPage)
	if err != nil {
		return nil, err
	}
	// Output Port の使用
	return e.OutputPort.SearchEvents(res)
}

func (e *Event) GetEventByID(params *server.GetEventByIDRequestParams) (*server.GetEventByIDResponse, entity.Error) {
	res, err := e.EventRepository.FindByID(params.EventID)
	if err != nil {
		return nil, err
	}
	return e.OutputPort.GetEventByID(res)
}
