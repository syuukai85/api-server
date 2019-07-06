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
	db, err = gorm.Open("mysql", connectionString)
	if err != nil {
		panic(err)
	}

	autoMigrate()
}

func getParamString(param string, defaultValue string) string {
	env := os.Getenv(param)
	if env != "" {
		return env
	}
	return defaultValue
}

func getConnectionString() string {
	host := getParamString("MYSQL_DB_HOST", "db")
	port := getParamString("MYSQL_PORT", "3306")
	user := getParamString("MYSQL_USER", "root")
	pass := getParamString("MYSQL_PASSWORD", "root")
	dbname := getParamString("MYSQL_DB", "connthass")
	protocol := getParamString("MYSQL_PROTOCOL", "tcp")
	dbargs := getParamString("MYSQL_DBARGS", " ")

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
		entity.Likes{},
		entity.Category{},
		entity.Event{},
		entity.EventCategory{},
		entity.Role{},
		entity.Entry{},
		entity.EntryState{},
		entity.Role{},
		entity.Member{},
	)
}
