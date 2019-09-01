package model

// EventCategory イベントカテゴリ
type EventCategory struct {
	Base
	CategoryID uint64 `gorm:"not null;unique_index:idx_event_id_category_id"`
	EventID    uint64 `gorm:"not null;unique_index:idx_event_id_category_id"`
}
