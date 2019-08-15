package model

// User is connthass account
type User struct {
	Base
	Name          string `gorm:"size:50;not null"`
	UID           uint   `gorm:"not null;unique_index"`
	SysRoleID     uint   `gorm:"not null"`
}
