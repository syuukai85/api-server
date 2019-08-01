package waf

import (
	"log"
	"net/http"
	"strconv"
	"strings"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/waf/request"
	"github.com/connthass/connthass/api/interface/controller"
	"github.com/connthass/connthass/api/usecase/port/server"
	"github.com/gin-gonic/gin"
)

func (s *Server) searchEvents(controller *controller.EventController) func(c *gin.Context) {
	return func(c *gin.Context) {

		var req request.SearchEvents
		if err := c.ShouldBindUri(&req); err != nil {
			c.JSON(400, gin.H{"msg": err})
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
			c.JSON(http.StatusBadRequest, gin.H{"status": "BadRequest"})
			return
		}

		c.JSON(http.StatusOK, res.Events)
	}
}

func (s *Server) getEventByID(controller *controller.EventController) func(c *gin.Context) {
	return func(c *gin.Context) {

		var req request.GetEventByID
		if err := c.ShouldBindUri(&req); err != nil {
			c.JSON(400, gin.H{"msg": err})
			return
		}

		res, err := controller.GetEventByID(&server.GetEventByIDRequestParams{
			EventID: entity.EventID(req.EventID),
		})
		if err != nil {
			log.Println(err)
			c.JSON(http.StatusBadRequest, gin.H{"status": "BadRequest"})
			return
		}

		c.JSON(http.StatusOK, res.Event)
	}
}
