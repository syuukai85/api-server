

package controller

import (
	"github.com/connthass/connthass/api/usecase/port"
	"github.com/connthass/connthass/api/usecase/interactor"
)

type EventController struct {
	InputPort port.EventInputPort
}

func NewEventController() *EventController {
	return &EventController{
	  InputPort: interactor.NewEvent(
		presenter.NewHTTPPresenter(),
		database.NewDataSourceRDBRepository(config),
	  ),
	}
  }
  
  func (ec *EventController) SearchEvents() port.Error {
	// Input Port の使用
	return ec.InputPort.DownloadDataSources()
  }