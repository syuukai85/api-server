package entity

import "github.com/jinzhu/gorm"

// EntryEvent 参加しているイベントとその状態を表す関連テーブル
type EntryEvent struct {
	gorm.Model
	UserID  uint
	EventID uint
	RoleID  uint
}
