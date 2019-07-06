package entity

import "github.com/jinzhu/gorm"

// Group is set of Event and User
type Group struct {
	gorm.Model
	Name   string `gorm:"size:255"`
	Domain string `gorm:"size:255"`
}
