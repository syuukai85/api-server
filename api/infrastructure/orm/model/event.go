package model

import "time"

// Event 例）勉強会、LT、懇親会
type Event struct {
	Base
	BaseColor
	Title            string    `gorm:"size:50;not null"`
	Description      string    `gorm:"size:20000;not null"`
	Capacity         uint64    `gorm:"not null"`
	ImageURL         string    `gorm:"size:255"`
	QRCodeURL        string    `gorm:"size:255"`
	HoldStartDate    time.Time `gorm:"not null"`
	HoldEndDate      time.Time `gorm:"not null"`
	RecruitStartDate time.Time
	RecruitEndDate   time.Time
	GroupID          uint64
	VenueID          uint64     `gorm:"not null"`
	Group            Group      `gorm:"foreignkey:GroupID;association_foreignkey:Refer"`
	Venue            Venue      `gorm:"foreignkey:VenueID;association_foreignkey:Refer"`
	Bookmarks        []User     `gorm:"many2many:bookmarks"`
	Entries          []User     `gorm:"many2many:entry_events;"`
	Categories       []Category `gorm:"many2many:event_categories;"`
}
