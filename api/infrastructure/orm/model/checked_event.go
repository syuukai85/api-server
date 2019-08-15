package model

// CheckedEvent 参照済みイベント
type CheckedEvent struct {
	Base
	UserID  uint `gorm:"not null;unique_index:idx_user_id_event_id"`
	EventID uint `gorm:"not null;unique_index:idx_user_id_event_id"`
}
