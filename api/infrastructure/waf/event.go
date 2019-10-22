package waf

import (
	"log"
	"net/http"
	"strconv"
	"strings"

	"github.com/syuukai85/api-server/api/entity"
	"github.com/syuukai85/api-server/api/infrastructure/validator"
	"github.com/syuukai85/api-server/api/infrastructure/waf/request"
	"github.com/syuukai85/api-server/api/interface/controller"
	"github.com/syuukai85/api-server/api/usecase/port/server"
	"github.com/gin-gonic/gin"
)

var (
	addEventError = entity.Error{
		Code:   http.StatusUnprocessableEntity,
		Errors: []string{"イベント追加に失敗しました"},
	}
)

func (s *Server) searchEvents(controller *controller.EventController) func(c *gin.Context) {
	return func(c *gin.Context) {

		var req request.SearchEvents
		if err := c.ShouldBindUri(&req); err != nil {
			c.JSON(internalServerError.Code, internalServerError)
			return
		}

		page, _ := strconv.Atoi(req.Page)
		perPage, _ := strconv.Atoi(req.PerPage)

		res, err := controller.SearchEvents(&server.SearchEventsRequestParams{
			Fields:  entity.Fields(strings.Split(req.Fields, ",")),
			Query:   entity.Query(req.Query),
			Page:    entity.Page(page),
			PerPage: entity.PerPage(perPage),
		})
		if err != nil {
			log.Println(err)
			c.JSON(err.Code, err.Errors)
			return
		}

		c.JSON(http.StatusOK, res.Events)
	}
}

func (s *Server) getEventByID(controller *controller.EventController) func(c *gin.Context) {
	return func(c *gin.Context) {

		var req request.GetEventByID
		if err := c.ShouldBindUri(&req); err != nil {
			c.JSON(internalServerError.Code, internalServerError)
			return
		}

		res, err := controller.GetEventByID(&server.GetEventByIDRequestParams{
			EventID: entity.EventID(req.EventID),
		})
		if err != nil {
			log.Println(err)
			c.JSON(err.Code, err)
			return
		}

		c.JSON(http.StatusOK, res.Event)
	}
}

func (s *Server) addEvent(controller *controller.EventController) func(c *gin.Context) {
	return func(c *gin.Context) {
		var req request.AddEvent
		c.BindJSON(&req)

		if err := validator.ValidateStruct(&req); err != nil {
			log.Printf("%#v", err.Error())
			c.JSON(addEventError.Code, addEventError)
			// TODO: エラーのあるフィールド名でメッセージを変える

			return
		}
		res, err := controller.AddEvent(&server.AddEventRequestParams{
			Event: req.ToEntity(),
		})
		if err != nil {
			log.Println(err)
			c.JSON(err.Code, err)
			return
		}
		c.JSON(http.StatusOK, res.Event)
	}
}
