package entity

import "github.com/jinzhu/gorm"

// Entry is relational table
type Entry struct {
	gorm.Model
	UserID   uint
	EventID  uint
	StateID uint
}
