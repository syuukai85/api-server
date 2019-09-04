package seed

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
	"github.com/connthass/connthass/api/interface/gateway"
	"github.com/jinzhu/gorm"
)

// Venue シードデータ配列
type Venue []model.Venue

// NewVenue コンストラクタ
func NewVenue() Venue {
	return Venue{
		{
			Base: model.Base{
				ID: gateway.EntityVenueIDToUint(entity.UnknownVenue),
			},
			Name: "unknown",
		},
	}
}

func (v Venue) seed(db *gorm.DB) {
	for _, venue := range v {
		if !db.First(&model.Venue{}, venue.ID).RecordNotFound() {
			continue
		}
		db.Create(&venue)
	}
}
