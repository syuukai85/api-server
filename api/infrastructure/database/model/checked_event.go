package model

// CheckedEvent 参照済みイベント
type CheckedEvent struct {
	Base
	UserID  uint
	EventID uint
}
