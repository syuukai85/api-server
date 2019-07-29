package database

import (
	"fmt"
	"os"
	"strings"

	"github.com/connthass/connthass/api/infrastructure/database/model"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var (
	db  *gorm.DB
	err error
)

// Init is initialize db from main function
func Init() {
	connectionString := getConnectionString()
	dbConnection := os.Getenv("DB_CONNECTION")
	db, err = gorm.Open(dbConnection, connectionString)
	if err != nil {
		panic(err)
	}

	autoMigrate()
}

func getConnectionString() string {
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	user := os.Getenv("DB_USERNAME")
	pass := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_DATABASE")
	protocol := os.Getenv("DB_PROTOCOL")
	dbargs := os.Getenv("DB_ARGS")

	if strings.Trim(dbargs, " ") != "" {
		dbargs = "?" + dbargs
	} else {
		dbargs = ""
	}
	return fmt.Sprintf("%s:%s@%s(%s:%s)/%s%s",
		user, pass, protocol, host, port, dbname, dbargs)
}

// GetDB is called in models
func GetDB() *gorm.DB {
	return db
}

func autoMigrate() {
	db.AutoMigrate(
		model.User{},
		model.Like{},
		model.Category{},
		model.Event{},
		model.EventCategory{},
		model.AppRole{},
		model.SysRole{},
		model.EntryEvent{},
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
	db.Model(model.Event{}).AddForeignKey("venue_id", "venues(id)", "SET NULL", "CASCADE")
}
