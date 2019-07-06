package main

import (
	"github.com/connthass/connthass/api/database"
)

func main() {
	database.Init()

	db := database.GetDB()
	defer db.Close()
}
