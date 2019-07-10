package entity

import "github.com/jinzhu/gorm"

// Role イベント、グループ、システムの権限
type Role struct {
	gorm.Model
	Name string `gorm:"size:50"`
}
