package interactor


import (
	"github.com/connthass/connthass/api/usecase/port"
	"github.com/connthass/connthass/api/entity"
)

import (
)

type Event struct {
  OutputPort port.EventOutputPort
  Repository port.EventRepository
}

func NewEvent(
  outputPort port.EventOutputPort,
  repository port.EventRepository,
) *Event {
  return &Event{
    OutputPort: outputPort,
    Repository: repository,
  }
}

// Input Port の実装
func (e *Event) SearchEvents(params *port.SearchEventsRequestParams) (*port.SearchEventsResponse, port.Error) {
  res, err := e.EventRepository.FindAll()
  if err != nil {
    return nil, err
  }
  // Output Port の使用
  return e.OutputPort.SearchEvents(res)
}

func (e *Event) GetEventByID(params *port.GetEventByID) (*port.GetEventByIDResponse, port.Error) {
  res, err := e.EventRepository.Find(params.DataSourceID)
  if err != nil {
    return nil, err
  }
  return e.OutputPort.GetEventByID(res)
}
