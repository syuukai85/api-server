package database

import (
	"fmt"
	"os"
	"strings"

	"github.com/connthass/connthass/api/entity"
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
	return fmt.Sprintf("%s:%s@%s([%s]:%s)/%s%s",
		user, pass, protocol, host, port, dbname, dbargs)
}

// GetDB is called in models
func GetDB() *gorm.DB {
	return db
}

func autoMigrate() {
	db.AutoMigrate(
		entity.User{},
		entity.Like{},
		entity.Category{},
		entity.Event{},
		entity.EventCategory{},
		entity.AppRole{},
		entity.SysRole{},
		entity.EntryEvent{},
		entity.Group{},
		entity.Member{},
		entity.CheckedEvent{},
		entity.Bookmark{},
		entity.Venue{},
	)

	db.Model(entity.User{}).AddForeignKey("sys_role_id", "sys_roles(id)", "RESTRICT", "CASCADE")

	db.Model(entity.Bookmark{}).AddForeignKey("user_id", "users(id)", "CASCADE", "CASCADE")
	db.Model(entity.Bookmark{}).AddForeignKey("event_id", "events(id)", "CASCADE", "CASCADE")

	db.Model(entity.CheckedEvent{}).AddForeignKey("user_id", "users(id)", "CASCADE", "CASCADE")
	db.Model(entity.CheckedEvent{}).AddForeignKey("event_id", "events(id)", "CASCADE", "CASCADE")

	db.Model(entity.EntryEvent{}).AddForeignKey("user_id", "users(id)", "CASCADE", "CASCADE")
	db.Model(entity.EntryEvent{}).AddForeignKey("event_id", "events(id)", "CASCADE", "CASCADE")
	db.Model(entity.EntryEvent{}).AddForeignKey("app_role_id", "app_roles(id)", "RESTRICT", "CASCADE")

	db.Model(entity.Like{}).AddForeignKey("user_id", "users(id)", "CASCADE", "CASCADE")
	db.Model(entity.Like{}).AddForeignKey("category_id", "categories(id)", "CASCADE", "CASCADE")

	db.Model(entity.EventCategory{}).AddForeignKey("event_id", "events(id)", "CASCADE", "CASCADE")
	db.Model(entity.EventCategory{}).AddForeignKey("category_id", "categories(id)", "CASCADE", "CASCADE")

	db.Model(entity.Member{}).AddForeignKey("user_id", "users(id)", "CASCADE", "CASCADE")
	db.Model(entity.Member{}).AddForeignKey("app_role_id", "app_roles(id)", "RESTRICT", "CASCADE")
	db.Model(entity.Member{}).AddForeignKey("group_id", "`groups`(id)", "CASCADE", "CASCADE")

	db.Model(entity.Event{}).AddForeignKey("group_id", "`groups`(id)", "SET NULL", "CASCADE")
	db.Model(entity.Event{}).AddForeignKey("venue_id", "venues(id)", "SET NULL", "CASCADE")
}
