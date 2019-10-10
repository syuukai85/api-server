package seed

import (
	"github.com/connthass/connthass/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
)

// Group シードデータ配列
type Group []model.Group

// NewGroup コンストラクタ
func NewGroup() Group {
	// TODO: シードデータを用意
	return Group{}
}

func (g Group) seed(db *gorm.DB) {
	for _, group := range g {
		if !db.First(&model.Group{}, group.ID).RecordNotFound() {
			continue
		}
		db.Create(&group)
	}
}
