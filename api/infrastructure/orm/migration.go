package orm

import (
	"github.com/connthass/connthass/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
)

func autoMigrate(db *gorm.DB) {
	db.AutoMigrate(
		model.User{},
		model.Like{},
		model.EventCategory{},
		model.EntryEvent{},
		model.Category{},
		model.Event{},
		model.AppRole{},
		model.SysRole{},
		model.Group{},
		model.Member{},
		model.CheckedEvent{},
		model.Bookmark{},
		model.Venue{},
	)

	db.Model(model.User{}).AddForeignKey("sys_role_id", "sys_roles(id)", "RESTRICT", "CASCADE")

	db.Model(model.Bookmark{}).AddForeignKey("user_id", "users(id)", "CASCADE", "CASCADE")
	db.Model(model.Bookmark{}).AddForeignKey("event_id", "events(id)", "CASCADE", "CASCADE")

	db.Model(model.CheckedEvent{}).AddForeignKey("user_id", "users(id)", "CASCADE", "CASCADE")
	db.Model(model.CheckedEvent{}).AddForeignKey("event_id", "events(id)", "CASCADE", "CASCADE")

	db.Model(model.EntryEvent{}).AddForeignKey("user_id", "users(id)", "CASCADE", "CASCADE")
	db.Model(model.EntryEvent{}).AddForeignKey("event_id", "events(id)", "CASCADE", "CASCADE")
	db.Model(model.EntryEvent{}).AddForeignKey("app_role_id", "app_roles(id)", "RESTRICT", "CASCADE")

	db.Model(model.Like{}).AddForeignKey("user_id", "users(id)", "CASCADE", "CASCADE")
	db.Model(model.Like{}).AddForeignKey("category_id", "categories(id)", "CASCADE", "CASCADE")

	db.Model(model.EventCategory{}).AddForeignKey("event_id", "events(id)", "CASCADE", "CASCADE")
	db.Model(model.EventCategory{}).AddForeignKey("category_id", "categories(id)", "CASCADE", "CASCADE")

	db.Model(model.Member{}).AddForeignKey("user_id", "users(id)", "CASCADE", "CASCADE")
	db.Model(model.Member{}).AddForeignKey("app_role_id", "app_roles(id)", "RESTRICT", "CASCADE")
	db.Model(model.Member{}).AddForeignKey("group_id", "`groups`(id)", "CASCADE", "CASCADE")

	db.Model(model.Event{}).AddForeignKey("group_id", "`groups`(id)", "SET NULL", "CASCADE")
	db.Model(model.Event{}).AddForeignKey("venue_id", "venues(id)", "CASCADE", "RESTRICT")
}
