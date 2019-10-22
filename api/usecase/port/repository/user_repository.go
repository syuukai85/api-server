package repository

import (
	"github.com/syuukai85/api-server/api/entity"
)

// UserRepository Model interface
type UserRepository interface {
	FindByEntityUser(*entity.User) (*entity.User, *entity.Error)
}
