package entity

import "github.com/jinzhu/gorm"

// CheckedEvent 参照済みイベント
type CheckedEvent struct {
	gorm.Model
	UserID  uint
	EventID uint
}
