package request

import (
	"fmt"

	"github.com/connthass/connthass/api/entity"
)

// Users ユーザ郡
type Users []*User

// User ユーザ
type User struct {
	ID   string `json:"id" validate:"required"`
	Name string `json:"name" validate:"gte=1,lte=50"`
}

// ToEntity エンティティに変換
func (u *User) ToEntity() *entity.User {
	if u == nil {
		return nil
	}
	return &entity.User{
		ID:   entity.UserID(fmt.Sprint(u.ID)),
		Name: u.Name,
	}
}

// ToEntities エンティティに変換
func (u Users) ToEntities() []*entity.User {
	entityUsers := make([]*entity.User, len(u))
	for index, user := range u {
		entityUsers[index] = user.ToEntity()
	}

	return entityUsers
}
