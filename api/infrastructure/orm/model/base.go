package model

import (
	"time"
)

// Base 共通のモデル
type Base struct {
	ID        uint      `gorm:"primary_key"`
	CreatedAt time.Time `gorm:"default:current_timestamp"`
	UpdatedAt time.Time `gorm:"default:current_timestamp on update current_timestamp"`
}

// BaseColor カラーコード
type BaseColor struct {
	ColorCode string `gorm:"size:7;default:'#ffffff'"`
}

// BaseRole 権限、役割
type BaseRole struct {
	Name string `gorm:"size:50;not null;unique_index"`
}
