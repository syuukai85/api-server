package request

import (
	"fmt"

	"github.com/connthass/connthass/api/entity"
)

// Venue イベント会場
type Venue struct {
	ID   string `json:"id" validate:"required"`
	Name string `json:"name" validate:"gte=1,lte=50"`
}

func (v *Venue) ToEntity() *entity.Venue {
	if v == nil {
		return nil
	}
	return &entity.Venue{
		ID:   entity.VenueID(fmt.Sprint(v.ID)),
		Name: v.Name,
	}
}
