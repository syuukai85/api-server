package interactor

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port/repository"
	"github.com/connthass/connthass/api/usecase/port/server"
)

// APIKeyAuth 認証処理の実装
type APIKeyAuth struct {
	UserRepository repository.UserRepository
}

// NewAPIKeyAuth コンストラクタ
func NewAPIKeyAuth(userRepository repository.UserRepository) *APIKeyAuth {
	return &APIKeyAuth{
		UserRepository: userRepository,
	}
}

// Authenticate 認証処理
func (aka *APIKeyAuth) Authenticate(params *server.APIKeyAuthRequestParams) bool {
	user, err := aka.UserRepository.FindByEntitryUser(&entity.User{APIKey: params.APIKey})
	if user.APIKey == "" || err != nil {
		return false
	}

	return true
}
