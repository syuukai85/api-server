package waf

import (
	"log"
	"github.com/connthass/connthass/api/interface/controller"
	"github.com/connthass/connthass/api/infrastructure/database"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

type Server struct {
	engine *gin.Engine
}

func newServer() (*Server, error) {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	database.Init()
	return &Server{
		engine: gin.Default(),
	}, nil
}

func (s *Server) setRouter() {

	v1 := s.engine.Group("/v1")
	events := v1.Group("/events")
	{
		eventController := controller.NewEventController()
		events.GET("/", s.searchEvents(eventController))
	}

	event := v1.Group("/event")
	{
		eventController := controller.NewEventController()
		event.GET("/:eventId", s.getEventByID(eventController))
	}
}

func Run() {
	s, err := newServer()
	if err != nil {
		panic(err)
	}

	s.setRouter()
	s.engine.Run()
}
