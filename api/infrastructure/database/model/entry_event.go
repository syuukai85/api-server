package model

// EntryEvent 参加しているイベントとその状態を表す関連テーブル
type EntryEvent struct {
	Base
	UserID    uint
	EventID   uint
	AppRoleID uint
}
