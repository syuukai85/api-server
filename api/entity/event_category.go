package entity

import "github.com/jinzhu/gorm"

// EventCategory is relational table
type EventCategory struct {
	gorm.Model
	EventID    uint
	CategoryID uint
}
