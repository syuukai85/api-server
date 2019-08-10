package model

// AppRole イベント、グループ、システムの権限
type AppRole struct {
	Base
	BaseRole
	EntryEvents []EntryEvent
	Members     []Member
}
