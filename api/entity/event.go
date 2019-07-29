package entity

import (
	"time"
)

type EventID string

// Event 例）勉強会、LT、懇親会
type Event struct {
	ID EventID
	ColorCode string
	Title            string
	Description      string
	Capacity         uint
	ImageURL         string
	QRCodeURL        string
	HoldStartDate    time.Time
	HoldEndDate      time.Time
	RecruitStartDate time.Time
	RecruitEndDate   time.Time
	GroupID          string
	VenueID          string
}
