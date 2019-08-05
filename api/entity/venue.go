package entity

type VenueID string

type Venue struct {
	ID   VenueID `json:"id"`
	Name string  `json:"name"`
}
