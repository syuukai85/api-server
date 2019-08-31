package repository

import (
	"github.com/connthass/connthass/api/entity"
)

// UserRepository Model interface
type UserRepository interface {
	FindByEntityUser(*entity.User) (*entity.User, *entity.Error)
}
