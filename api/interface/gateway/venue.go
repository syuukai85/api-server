package gateway

import (
	"fmt"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
)

func venueToEntity(venue model.Venue) entity.Venue {
	entityVenue := entity.Venue{
		ID:   entity.VenueID(fmt.Sprint(venue.ID)),
		Name: venue.Name,
	}

	return entityVenue
}
