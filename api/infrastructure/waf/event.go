package waf

import (
	"github.com/gin-gonic/gin"
	"github.com/connthass/connthass/infrastructure/controller"
	"github.com/connthass/connthass/infrastructure/waf/request"
)
  
  func (s *Server) searchEvents(controller *controller.EventController) func(c *gin.Context) error {
	return func(c *gin.Context) error {
		_res, err := controller.SearchEvents()
		if err != nil {
		  c.Logger().Error(err)
		  return echo.NewHTTPError(http.StatusBadRequest)
		}
		res, status := response.EventResponseAdapter(_res)
	
		c.JSON(status, res)
	}
  }