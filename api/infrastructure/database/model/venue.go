package model

// Venue イベントの開催場所
type Venue struct {
	Base
	Name string `gorm:"size:255;not null;unique_index"`
}
