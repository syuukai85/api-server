package main

import (
	"log"

	"github.com/connthass/connthass/api/database"
	"github.com/joho/godotenv"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main() {
	database.Init()

	db := database.GetDB()
	defer db.Close()
}
