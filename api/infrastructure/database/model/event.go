package model

import "time"

// Event 例）勉強会、LT、懇親会
type Event struct {
	Base
	BaseColor
	Title            string `gorm:"size:50;not null"`
	Description      string
	Capacity         uint
	ImageURL         string    `gorm:"size:255"`
	QRCodeURL        string    `gorm:"size:255"`
	HoldStartDate    time.Time `gorm:"not null"`
	HoldEndDate      time.Time `gorm:"not null"`
	RecruitStartDate time.Time
	RecruitEndDate   time.Time
	GroupID          uint
	VenueID          uint
	Bookmarks        []Bookmark
	EntryEvents      []EntryEvent
	EventCategories  []EventCategory
}
