package entity

// UserID ユーザID
type UserID string

// UserUID firebaseのUID
type UserUID string

// UserAPIKey ユーザ認証に必要なKey
type UserAPIKey string

// User ユーザ
type User struct {
	ID   UserID  `json:"id"`
	UID  UserUID `json:"uid"`
	APIKey UserAPIKey `json:"apiKey`
	Name string  `json:"name"`
}
