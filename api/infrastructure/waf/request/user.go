package request

import (
	"fmt"

	"github.com/connthass/connthass/api/entity"
)

// User ユーザ
type User struct {
	ID   string `json:"id" validate:"required"`
	Name string `json:"name" validate:"gte=1,lte=50"`
}

func (u *User) ToEntity() *entity.User {
	if u == nil {
		return nil
	}
	return &entity.User{
		ID:   entity.UserID(fmt.Sprint(u.ID)),
		Name: u.Name,
	}
}

func usersToEntities(users []*User) []*entity.User {
	entityUsers := make([]*entity.User, 0)
	for _, user := range users {
		entityUsers = append(entityUsers, user.ToEntity())
	}

	return entityUsers
}
