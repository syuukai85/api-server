package interactor

import (
	"net/http"

	"github.com/syuukai85/api-server/api/entity"
	"github.com/syuukai85/api-server/api/usecase/port/repository"
	"github.com/syuukai85/api-server/api/usecase/port/server"
)

const (
	keyAuthFailure = "認証に失敗しました"
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
func (aka *APIKeyAuth) Authenticate(params *server.APIKeyAuthRequestParams) (bool, *entity.Error) {
	if _, err := aka.UserRepository.FindByEntityUser(&entity.User{APIKey: params.APIKey}); err != nil || params.APIKey == "" {
		return false, &entity.Error{
			Code:   http.StatusUnauthorized,
			Errors: []string{keyAuthFailure},
		}
	}

	return true, nil
}
