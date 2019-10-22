package model

// User is syuukai account
type User struct {
	Base
	Name      string  `gorm:"size:50;not null"`
	UID       string  `gorm:"not null;unique_index"`
	APIKey    string  `gorm:"size:60;not null;unique_index"`
	SysRoleID *uint64 `gorm:"not null"`
}
