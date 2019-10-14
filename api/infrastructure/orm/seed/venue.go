package seed

import (
	"github.com/syuukai85/api-server/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
)

// Venue シードデータ配列
type Venue []model.Venue

// NewVenue コンストラクタ
func NewVenue() Venue {
	// TODO: シードデータを用意
	return Venue{}
}

func (v Venue) seed(db *gorm.DB) {
	for _, venue := range v {
		if !db.First(&model.Venue{}, venue.ID).RecordNotFound() {
			continue
		}
		db.Create(&venue)
	}
}
