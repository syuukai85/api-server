package server

import (
	"github.com/syuukai85/api-server/api/entity"
)

// APIKeyAuth Interactorで実装
type APIKeyAuth interface {
	Authenticate(*APIKeyAuthRequestParams) (bool, *entity.Error)
}

// APIKeyAuthRequestParams Interactorの引数に利用
type APIKeyAuthRequestParams struct {
	APIKey entity.UserAPIKey
}
