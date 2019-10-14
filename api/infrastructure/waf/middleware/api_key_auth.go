package middleware

import (
	"github.com/syuukai85/api-server/api/entity"
	"github.com/syuukai85/api-server/api/usecase/port/server"
	"github.com/gin-gonic/gin"
)

const (
	xAPIKey = "X-API-KEY"
)

// APIKeyAuth 全エンドポイントで認証をする
func APIKeyAuth(apiKeyAuth server.APIKeyAuth) gin.HandlerFunc {
	return func(c *gin.Context) {
		apiKey := c.GetHeader(xAPIKey)
		isAuth, err := apiKeyAuth.Authenticate(&server.APIKeyAuthRequestParams{APIKey: entity.UserAPIKey(apiKey)})

		if !isAuth {
			c.JSON(err.Code, err)
			c.Abort()
		}
	}
}
