package entity

// AppRoleID アプリ内での役割
type AppRoleID string

const (
	// GeneralEntryID 一般参加
	GeneralEntryID AppRoleID = "1"

	// OrganizerEntryID 運営
	OrganizerEntryID AppRoleID = "2"
)
