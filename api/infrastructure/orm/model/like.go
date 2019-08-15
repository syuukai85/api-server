package model

// Like 好きなカテゴリの関連テーブル
type Like struct {
	Base
	UserID     uint `gorm:"not null;unique_index:idx_user_id_category_id"`
	CategoryID uint `gorm:"not null;unique_index:idx_user_id_category_id"`
}
