package model

// EventCategory イベントカテゴリ
type EventCategory struct {
	Base
	CategoryID uint `gorm:"not null;unique_index:idx_event_id_category_id"`
	EventID    uint `gorm:"not null;unique_index:idx_event_id_category_id"`
}
