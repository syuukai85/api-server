package entity

import (
	"time"
)

type Fields []string

type Query string

type Page int

type PerPage int

type EventID string

// Event 簡略化のためjsonタグを記載
type Event struct {
	ID               EventID   `json:"id"`
	ColorCode        string    `json:"colorCode"`
	Title            string    `json:"title"`
	Description      string    `json:"description"`
	Capacity         uint      `json:"capacity"`
	ImageURL         string    `json:"imageUrl"`
	QRCodeURL        string    `json:"qrCodeUrl"`
	HoldStartDate    time.Time `json:"holdStartDate"`
	HoldEndDate      time.Time `json:"holdEndDate"`
	RecruitStartDate time.Time `json:"recruitStartDate"`
	RecruitEndDate   time.Time `json:"recruitEndDate"`
	GroupID          string    `json:"groupId"`
	VenueID          string    `json:"venueId"`
}
