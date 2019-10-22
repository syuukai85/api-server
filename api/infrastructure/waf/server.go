package waf

import (
	"net/http"

	"github.com/syuukai85/api-server/api/entity"
	"github.com/syuukai85/api-server/api/infrastructure/orm"
	"github.com/syuukai85/api-server/api/infrastructure/waf/middleware"
	"github.com/syuukai85/api-server/api/interface/controller"
	"github.com/syuukai85/api-server/api/interface/gateway"
	"github.com/syuukai85/api-server/api/usecase/interactor"
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
