package entity

// Category 例）Go, React, もくもく
type Category struct {
	Base
	Name string `gorm:"size:50;not null;unique_index"`
}
