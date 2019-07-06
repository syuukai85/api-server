package entity

import "github.com/jinzhu/gorm"

// Member is relational table
type Member struct {
	gorm.Model
	GroupID uint
	UserID  uint
	RoleID  uint
}
