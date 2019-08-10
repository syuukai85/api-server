package entity

// UserID ユーザID
type UserID string

// UserUID firebaseのUID
type UserUID string

// User ユーザ
type User struct {
	ID   UserID  `json:"id"`
	UID  UserUID `json:"uid"`
	Name string  `json:"name"`
}
