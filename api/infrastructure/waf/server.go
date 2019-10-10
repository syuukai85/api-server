package waf

import (
	"net/http"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm"
	"github.com/connthass/connthass/api/infrastructure/waf/middleware"
	"github.com/connthass/connthass/api/interface/controller"
	"github.com/connthass/connthass/api/interface/gateway"
	"github.com/connthass/connthass/api/usecase/interactor"
	"github.com/gin-gonic/gin"
)

var (
	internalServerError = entity.Error{
		Code:   http.StatusInternalServerError,
		Errors: []string{"システムエラーが発生しました"},
	}
)

// Server Ginをラップ
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
	apiKeyAuth := v1.Group("/")
	apiKeyAuth.Use(middleware.APIKeyAuth(interactor.NewAPIKeyAuth(
		gateway.NewUser(orm.GetDB()),
	)))
	events := apiKeyAuth.Group("/events")
	{
		eventController := controller.NewEventController()
		events.GET("/", s.searchEvents(eventController))
	}

	event := apiKeyAuth.Group("/event")
	{
		eventController := controller.NewEventController()
		event.GET("/:eventId", s.getEventByID(eventController))
		event.POST("", s.addEvent(eventController))
	}
}

// Run サーバを実行する
func Run() {
	s, err := newServer()
	if err != nil {
		panic(err)
	}

	s.setRouter()
	s.engine.Run()
}
