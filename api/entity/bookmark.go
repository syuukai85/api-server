package entity

import "github.com/jinzhu/gorm"

// Bookmark おきにいりイベントの関連テーブル
type Bookmark struct {
	gorm.Model
	UserID  uint
	EventID uint
}
