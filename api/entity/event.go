package entity

import (
	"time"
)

// EventID イベントID
type EventID string

// Event イベント
type Event struct {
	ID               EventID    `json:"id"`
	ColorCode        string     `json:"colorCode"`
	Title            string     `json:"title"`
	Description      string     `json:"description"`
	Capacity         uint       `json:"capacity"`
	ImageURL         string     `json:"imageUrl"`
	QRCodeURL        string     `json:"qrCodeUrl"`
	HoldStartDate    time.Time  `json:"holdStartDate"`
	HoldEndDate      time.Time  `json:"holdEndDate"`
	RecruitStartDate time.Time  `json:"recruitStartDate"`
	RecruitEndDate   time.Time  `json:"recruitEndDate"`
	Group            Group      `json:"group"`
	Venue            Venue      `json:"venue"`
	Entries          []User     `json:"entries"`
	Organizer        []User     `json:"organizer"`
	Categories       []Category `json:"categories"`
}
