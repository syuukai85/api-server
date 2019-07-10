package entity

import "github.com/jinzhu/gorm"

// Like 好きなカテゴリの関連テーブル
type Like struct {
	gorm.Model
	UserID     uint
	CategoryID uint
}
