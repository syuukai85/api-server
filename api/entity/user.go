package entity

import "github.com/jinzhu/gorm"

// User is connthass account
type User struct {
	gorm.Model
	Name     string `gorm:"size:255"`
	Password string `gorm:"size:255"`
	Email    string `gorm:"size:255"`
	RoleID   uint
}
