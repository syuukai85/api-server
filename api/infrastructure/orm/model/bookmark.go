package model

// Bookmark おきにいりイベントの関連テーブル
type Bookmark struct {
	Base
	UserID  uint `gorm:"not null;unique_index:idx_user_id_event_id"`
	EventID uint `gorm:"not null;unique_index:idx_user_id_event_id"`
}
