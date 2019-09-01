package model

// Like 好きなカテゴリの関連テーブル
type Like struct {
	Base
	UserID     uint64 `gorm:"not null;unique_index:idx_user_id_category_id"`
	CategoryID uint64 `gorm:"not null;unique_index:idx_user_id_category_id"`
}
