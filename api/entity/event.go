package entity

import (
	"time"

	"github.com/jinzhu/gorm"
)

// Event 例）勉強会、LT、懇親会
type Event struct {
	gorm.Model
	title            string `gorm:"size:50"`
	Description      string `gorm:"size:5000"`
	Capacity         uint
	ColorCode        string `gorm:"size:7"`
	ImageURL         string `gorm:"size:255"`
	QRCodeURL        string `gorm:"size:255"`
	HoldStartDate    time.Time
	HoldEndDate      time.Time
	RecruitStartDate time.Time
	RecruitEndDate   time.Time
	GroupID          uint
	VenueID          uint
}
