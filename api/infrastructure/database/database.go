package database

import (
	"fmt"
	"os"
	"strings"

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
