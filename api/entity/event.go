package entity

import "github.com/jinzhu/gorm"

// Event is playing, learnning, talking etc...
type Event struct {
	gorm.Model
	title       string `gorm:"size:50"`
	Description string `gorm:"size:5000"`
	Capacity    uint
	GroupID     uint
}
