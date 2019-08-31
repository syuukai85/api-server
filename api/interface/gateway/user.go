package gateway

import (
	"fmt"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
)

// User DBモデルとやり取りをする
type User struct {
	db *gorm.DB
}

// NewUser コンストラクタ
func NewUser() *User {
	return &User{
		db: orm.GetDB(),
	}
}

func userToEntity(user model.User) *entity.User {
	entityUser := &entity.User{
		ID:   entity.UserID(fmt.Sprint(user.ID)),
		UID:  entity.UserUID(fmt.Sprint(user.UID)),
		Name: user.Name,
	}
	return entityUser
}

func usersToEntities(users []model.User) []*entity.User {

	entityUsers := make([]*entity.User, 0)

	for _, user := range users {
		entityUsers = append(entityUsers, userToEntity(user))
	}

	return entityUsers
}

// FindOrganizerByEventID イベント運営者を取得する
func (u *User) findOrganizerByEventID(eventID string) []*entity.User {
	var users []model.User
	u.db.Joins(
		"JOIN entry_events ON entry_events.user_id = users.id AND entry_events.event_id = ? AND entry_events.app_role_id = ?",
		eventID,
		entity.OrganizerEntryID,
	).Find(&users)

	return usersToEntities(users)
}

// FindGeneralByEventID イベント一般参加者を取得する
func (u *User) findGeneralByEventID(eventID string) []*entity.User {
	var users []model.User
	u.db.Joins(
		"JOIN entry_events ON entry_events.user_id = users.id AND entry_events.event_id = ? AND entry_events.app_role_id = ?",
		eventID,
		entity.GeneralEntryID,
	).Find(&users)

	return usersToEntities(users)
}

// FindByEntityUser エンティティのからユーザを取得
func (u *User) FindByEntityUser(entityUser *entity.User) (*entity.User, *entity.Error) {
	var user model.User
	firstUser := u.db.Where(&model.User{
		UID:    fmt.Sprint(entityUser.UID),
		APIKey: fmt.Sprint(entityUser.APIKey),
	}).First(&user)
	if firstUser.RecordNotFound() {
		return nil, &entity.Error{}
	}

	return userToEntity(user), nil
}
