package entity

// CategoryID カテゴリID
type CategoryID string

// Category 例）Go, React, もくもく
type Category struct {
	ID   CategoryID `json:"id"`
	Name string     `json:"name"`
}
