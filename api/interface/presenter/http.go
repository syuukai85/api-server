interface/presenter/http.go

package presenter

import (
	"github.com/connthass/connthass/api/usecase/port"
)

type HTTPPresenter struct {
  port.EventOutputPort
}

func NewHTTPPresenter() *HTTPPresenter {
  return &HTTPPresenter{}
}

// Output Port の実装
func (p *HTTPPresenter) SearchEvents(events []entity.Event) (*port.SearchEventsResponse, port.Error) {
	res := &port.SearchEventsResponse{}
	res.Events = datasources
	return res, nil
  }
  
  func (p *HTTPPresenter) GetEventByID(event *entity.Event) (*port.GetEventByIDResponse, port.Error) {
	res := &port.GetEventByIDResponse{}
	res.Event = event
	return res, nil
  }