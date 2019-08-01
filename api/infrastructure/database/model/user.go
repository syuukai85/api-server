package model

// User is connthass account
type User struct {
	Base
	Name          string `gorm:"size:50;not null;unique_index"`
	Nickname      string `gorm:"size:50;not null"`
	SysRoleID     uint
	Bookmarks     []Bookmark
	CheckedEvents []CheckedEvent
	Likes         []Like
	Members       []Member
}
