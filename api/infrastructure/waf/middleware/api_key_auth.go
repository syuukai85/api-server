package middleware

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port/server"
	"github.com/gin-gonic/gin"
)

const (
	xAPIKey          = "X-API-KEY"
	unauthStatusCode = 401
	unauthMessage    = "Unauthorized"
)

// APIKeyAuth 全エンドポイントで認証をする
func APIKeyAuth(apiKeyAuth server.APIKeyAuth) gin.HandlerFunc {
	return func(c *gin.Context) {
		apiKey := c.GetHeader(xAPIKey)
		isAuth := apiKeyAuth.Authenticate(&server.APIKeyAuthRequestParams{APIKey: entity.UserAPIKey(apiKey)})

		if !isAuth {
			c.JSON(unauthStatusCode, gin.H{"message": unauthMessage})
			c.Abort()
		}
	}
}
