package entity

import "github.com/jinzhu/gorm"

// Group is イベントとユーザの集まり
type Group struct {
	gorm.Model
	Name        string `gorm:"size:50"`
	Description string `gorm:"size:5000"`
	Domain      string `gorm:"size:50"`
	ColorCode   string `gorm:"size:7"`
	ImagePath   string `gorm:"size:255"`
}
