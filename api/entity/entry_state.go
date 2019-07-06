package entity

import "github.com/jinzhu/gorm"

// EntryState is user entry state
type EntryState struct {
	gorm.Model
	Name string `gorm:"size:50"`
}
