package server

import (
	"github.com/connthass/connthass/api/entity"
)

// APIKeyAuth Interactorで実装
type APIKeyAuth interface {
	Authenticate(*APIKeyAuthRequestParams) bool
}

// APIKeyAuthRequestParams Interactorの引数に利用
type APIKeyAuthRequestParams struct {
	APIKey entity.UserAPIKey
}
