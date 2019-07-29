package model

// Member グループに所属するメンバーの関連テーブル
type Member struct {
	Base
	GroupID   uint
	UserID    uint
	AppRoleID uint
}
