package model

// Group is イベントとユーザの集まり
type Group struct {
	Base
	BaseColor
	Name        string `gorm:"size:50;not null"`
	Description string `gorm:"size:20000;not null"`
	Domain      string `gorm:"size:64;not null"`
	ImageURL    string `gorm:"size:255;not null"`
}
