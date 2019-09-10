package repository

import (
	"github.com/connthass/connthass/api/entity"
)

// GroupRepository Model interface
type GroupRepository interface {
	FindByID(entity.GroupID) (*entity.Group, *entity.Error)
}
