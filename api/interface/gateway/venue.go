package gateway

import (
	"fmt"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
)

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
