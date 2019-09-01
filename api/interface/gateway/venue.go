package gateway

import (
	"fmt"
	"strconv"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
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

func entityVenueIDToUint(entityVenueID entity.VenueID) uint64 {
	venueID, _ := strconv.ParseUint(fmt.Sprint(entityVenueID), 10, 64)
	return venueID
}

func venueToEntity(venue model.Venue) *entity.Venue {
	if venue.ID == 0 {
		return nil
	}
	entityVenue := &entity.Venue{
		ID:   entity.VenueID(fmt.Sprint(venue.ID)),
		Name: venue.Name,
	}

	return entityVenue
}
