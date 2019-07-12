package entity

import "github.com/jinzhu/gorm"

// User is connthass account
type User struct {
	gorm.Model
	Name      string `gorm:"size:50"`
	SysRoleID uint
}
