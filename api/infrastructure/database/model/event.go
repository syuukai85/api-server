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
	VenueID          uint       `gorm:"not null"`
	Group            Group      `gorm:"foreignkey:GroupID;association_foreignkey:Refer"`
	Venue            Venue      `gorm:"foreignkey:VenueID;association_foreignkey:Refer"`
	Bookmarks        []User     `gorm:"many2many:bookmarks`
	Entries          []User     `gorm:"many2many:entry_events;"`
	Categories       []Category `gorm:"many2many:event_categories;"`
}
