package model

// Like 好きなカテゴリの関連テーブル
type Like struct {
	Base
	UserID     uint
	CategoryID uint
}
