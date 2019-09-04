package main

import (
	"log"

	"github.com/connthass/connthass/api/infrastructure/orm"
	"github.com/connthass/connthass/api/infrastructure/orm/seed"
	"github.com/connthass/connthass/api/infrastructure/validator"
	"github.com/connthass/connthass/api/infrastructure/waf"
	"github.com/joho/godotenv"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	validator.Init()
	orm.Init()

	db := orm.GetDB()
	orm.AutoMigrate(db)
	seed.Seed(db,
		"group",
		"venue",
		"app_roles",
		"sys_roles",
		"admin_users",
		"general_users",
	)
}

func main() {
	waf.Run()
}
