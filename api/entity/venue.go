package entity

import "github.com/jinzhu/gorm"

// Venue イベントの開催場所
type Venue struct {
	gorm.Model
	Name string `gorm:"size:255"`
}
