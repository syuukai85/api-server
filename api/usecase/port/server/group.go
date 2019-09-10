package server

import (
	"github.com/connthass/connthass/api/entity"
)

// GroupInputPort Interactorで実装
type GroupInputPort interface {
	GetGroupByID(*GetGroupByIDRequestParams) (*GetGroupByIDResponse, *entity.Error)
}

// GetGroupByIDRequestParams Interactorの引数に利用
type GetGroupByIDRequestParams struct {
	GroupID entity.GroupID
}

// GroupOutputPort Presenter で実装、Interactor で使用される
type GroupOutputPort interface {
	GetGroupByID(*entity.Group) (*GetGroupByIDResponse, *entity.Error)
}

// GetGroupByIDResponse Presenterの戻り値で利用
type GetGroupByIDResponse struct {
	Group *entity.Group
}
