package server

import (
	"github.com/connthass/connthass/api/entity"
)

// EntryEventInputPort Interactorで実装
type EntryEventInputPort interface {
	EntryEvent(*EntryEventRequestParams) (*EntryEventResponse, *entity.Error)
}

type EntryEventRequestParams struct {
	EventID    entity.EventID
	EntryEvent *entity.EntryEvent
}

// EntryEventOutputPort Presenter で実装、Interactor で使用される
type EntryEventOutputPort interface {
	EntryEvent(*entity.EntryEvent) (*EntryEventResponse, *entity.Error)
}

// EntryEventResponse EntryEventエンドポイントの出力
type EntryEventResponse struct {
	EntryEvent *entity.EntryEvent
}
