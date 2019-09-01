package model

// EntryEvent 参加しているイベントとその状態を表す関連テーブル
type EntryEvent struct {
	Base
	UserID    uint64 `gorm:"not null;unique_index:idx_user_id_event_id"`
	EventID   uint64 `gorm:"not null;unique_index:idx_user_id_event_id"`
	AppRoleID uint64
}
