package entity

import "github.com/jinzhu/gorm"

// Likes is relational table
type Likes struct {
	gorm.Model
	UserID     uint
	CategoryID uint
}
