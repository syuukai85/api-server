
package gateway

import (
	"github.com/connthass/connthass/api/infrastructure/database/model"
	"github.com/connthass/connthass/api/port"
	"github.com/connthass/connthass/api/entity"
)

type Event struct {
	model model.Event
}

func (e *Event) SearchEvents() ([]entity.Event, port.Error) {
	// TODO: bleveを使ってクエリ検索
}

func (e *Event) Find() (entity.Event, port.Error) {
	// TODO: 一件取得
}