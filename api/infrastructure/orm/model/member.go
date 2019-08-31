package model

// Member グループに所属するメンバーの関連テーブル
type Member struct {
	Base
	GroupID   uint `gorm:"not null;unique_index:idx_group_id_user_id"`
	UserID    uint `gorm:"not null;unique_index:idx_group_id_user_id"`
	AppRoleID uint
}
