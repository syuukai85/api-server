package gateway

import (
	"fmt"
	"strconv"

	"github.com/syuukai85/api-server/api/entity"
	"github.com/syuukai85/api-server/api/infrastructure/orm"
	"github.com/syuukai85/api-server/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
)

// Venue DBモデルとやり取りをする
type Venue struct {
	db *gorm.DB
}

// NewVenue コンストラクタ
func NewVenue(tx *gorm.DB) *Venue {
	venue := &Venue{
		db: orm.GetDB(),
	}
	if tx != nil {
		venue.db = tx
	}
	return venue
}

func EntityVenueIDToUint(entityVenueID entity.VenueID) *uint64 {
	venueID, _ := strconv.ParseUint(fmt.Sprint(entityVenueID), 10, 64)
	return &venueID
}

func venueToModel(venue *entity.Venue) model.Venue {
	venueID := EntityVenueIDToUint(venue.ID)
	modelVenue := model.Venue{
		Name: venue.Name,
	}
	modelVenue.ID = venueID
	return modelVenue
}

func venueToEntity(venue model.Venue) *entity.Venue {
	if venue.ID == nil {
		return nil
	}
	entityVenue := &entity.Venue{
		ID:   entity.VenueID(fmt.Sprint(venue.ID)),
		Name: venue.Name,
	}

	return entityVenue
}
