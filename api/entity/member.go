package entity

import "github.com/jinzhu/gorm"

// Member グループに所属するメンバーの関連テーブル
type Member struct {
	gorm.Model
	GroupID   uint
	UserID    uint
	AppRoleID uint
}
