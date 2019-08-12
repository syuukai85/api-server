package repository

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/usecase/port"
)

// UserRepository Model interface
type UserRepository interface {
	FindByEntitryUser(*entity.User) (entity.User, port.Error)
}
