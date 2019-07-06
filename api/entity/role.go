package entity

import "github.com/jinzhu/gorm"

// Role is describe user role
type Role struct {
	gorm.Model
	Name string `gorm:"size:255"`
}
