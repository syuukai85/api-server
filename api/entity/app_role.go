package entity

// AppRoleID アプリ内での役割
type AppRoleID uint

const (
	// GeneralEntryID 一般参加
	GeneralEntryID AppRoleID = iota + 1

	// OrganizerEntryID 運営
	OrganizerEntryID
)
