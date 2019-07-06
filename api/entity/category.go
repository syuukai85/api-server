package entity

import "github.com/jinzhu/gorm"

// Category is Kind of Event
type Category struct {
	gorm.Model
	Name string `gorm:"size:255"`
}
