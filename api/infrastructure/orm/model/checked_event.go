package model

// CheckedEvent 参照済みイベント
type CheckedEvent struct {
	Base
	UserID  uint64 `gorm:"not null;unique_index:idx_user_id_event_id"`
	EventID uint64 `gorm:"not null;unique_index:idx_user_id_event_id"`
}
