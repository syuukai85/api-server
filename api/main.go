package main

import (
	"log"
	"github.com/connthass/connthass/api/infrastructure/waf"
	"github.com/joho/godotenv"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main() {
	waf.Run()
}
