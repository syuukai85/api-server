package entity

import "github.com/jinzhu/gorm"

// SysRole イベント、グループ、システムの権限
type SysRole struct {
	gorm.Model
	Name string `gorm:"size:50"`
}
