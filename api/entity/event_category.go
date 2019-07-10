package entity

import "github.com/jinzhu/gorm"

// EventCategory イベントカテゴリ
type EventCategory struct {
	gorm.Model
	EventID    uint
	CategoryID uint
}
