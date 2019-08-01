package waf

import (
	"github.com/connthass/connthass/api/interface/controller"
	"github.com/gin-gonic/gin"
)

type Server struct {
	engine *gin.Engine
}

func newServer() (*Server, error) {
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
