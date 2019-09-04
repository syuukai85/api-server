package seed

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
	"github.com/connthass/connthass/api/interface/gateway"
	"github.com/jinzhu/gorm"
)

// Group シードデータ配列
type Group []model.Group

// NewGroup コンストラクタ
func NewGroup() Group {
	return Group{
		{
			Base: model.Base{
				ID: gateway.EntityGroupIDToUint(entity.UnknownGroup),
			},
			Name: "unknown",
		},
	}
}

func (g Group) seed(db *gorm.DB) {
	for _, group := range g {
		if !db.First(&model.Group{}, group.ID).RecordNotFound() {
			continue
		}
		db.Create(&group)
	}
}
