package entity

// VenueID 会場ID
type VenueID string

// Venue イベント会場
type Venue struct {
	ID   VenueID `json:"id"`
	Name string  `json:"name"`
}
