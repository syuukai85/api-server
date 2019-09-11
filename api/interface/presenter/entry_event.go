package presenter

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port/server"
)

type EntryEventPresenter struct {
	server.EventOutputPort
}

func NewEntryEventPresenter() *EntryEventPresenter {
	return &EntryEventPresenter{}
}

func (eep *EntryEventPresenter) EntryEvent(entryEvent *entity.EntryEvent) (*server.EntryEventResponse, *entity.Error) {
	res := &server.EntryEventResponse{
		EntryEvent: entryEvent,
	}
	return res, nil
}
