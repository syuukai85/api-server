package entity

// VenueID 会場ID
type VenueID string

// Venue イベント会場
type Venue struct {
	ID   VenueID `json:"id"`
	Name string  `json:"name" validate:"gte=1,lte=50"`
}

const (
	// UnknownVenue 開催場所未設定
	UnknownVenue VenueID = "1"
)
