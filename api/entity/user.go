package entity

type UserID string
type UserUID string

type User struct {
	ID              UserID   `json:"id"`
	UID            UserUID    `json:"uid"`
	Name            string    `json:"name"`
}