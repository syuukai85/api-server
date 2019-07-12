package entity

import "github.com/jinzhu/gorm"

// Role イベント、グループ、システムの権限
type AppRole struct {
	gorm.Model
	Name string `gorm:"size:50"`
}
