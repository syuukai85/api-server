package entity

import "github.com/jinzhu/gorm"

// Category 例）Go, React, もくもく
type Category struct {
	gorm.Model
	Name string `gorm:"size:50"`
}
