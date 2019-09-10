package waf

import (
	"log"
	"net/http"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/waf/request"
	"github.com/connthass/connthass/api/interface/controller"
	"github.com/connthass/connthass/api/usecase/port/server"
	"github.com/gin-gonic/gin"
)

var (
	addGroupError = entity.Error{
		Code:   http.StatusUnprocessableEntity,
		Errors: []string{"グループ追加に失敗しました"},
	}
)

func (s *Server) getGroupByID(controller *controller.GroupController) func(c *gin.Context) {
	return func(c *gin.Context) {

		var req request.GetGroupByID
		if err := c.ShouldBindUri(&req); err != nil {
			c.JSON(internalServerError.Code, internalServerError)
			return
		}

		res, err := controller.GetGroupByID(&server.GetGroupByIDRequestParams{
			GroupID: entity.GroupID(req.GroupID),
		})
		if err != nil {
			log.Println(err)
			c.JSON(err.Code, err)
			return
		}

		c.JSON(http.StatusOK, res.Group)
	}
}
