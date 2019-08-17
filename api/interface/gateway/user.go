package gateway

import (
	"fmt"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
	"github.com/connthass/connthass/api/usecase/port"
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

func userToEntity(user model.User) entity.User {
	entityUser := entity.User{
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
func (u *User) FindOrganizerByEventID(eventID string) []*entity.User {
	var users []model.User
	u.db.Joins(
		"JOIN entry_events ON entry_events.user_id = users.id AND entry_events.event_id = ? AND entry_events.app_role_id = ?",
		eventID,
		entity.OrganizerEntryID,
	).Find(&users)

	return usersToEntities(users)
}

// FindGeneralByEventID イベント一般参加者を取得する
func (u *User) FindGeneralByEventID(eventID string) []*entity.User {
	var users []model.User
	u.db.Joins(
		"JOIN entry_events ON entry_events.user_id = users.id AND entry_events.event_id = ? AND entry_events.app_role_id = ?",
		eventID,
		entity.GeneralEntryID,
	).Find(&users)

	return usersToEntities(users)
}

// FindByEntitryUser エンティティのからユーザを取得
func (u *User) FindByEntitryUser(entiryUser *entity.User) (entity.User, port.Error) {
	var firstUser model.User
	user := model.User{
		UID:    fmt.Sprint(entiryUser.UID),
		APIKey: fmt.Sprint(entiryUser.APIKey),
	}
	u.db.Where(&user).First(&firstUser)

	return userToEntity(firstUser), nil
}
