package seed

import (
	"fmt"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/interface/gateway"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
	uuid "github.com/satori/go.uuid"
)

// Users シードデータ配列
type Users []model.User

// NewUsers コンストラクタ
func NewUsers(sysRoleID entity.SysRoleID, users ...model.User) Users {
	for index := range users {
		users[index].APIKey = fmt.Sprint(uuid.NewV4())
		users[index].SysRoleID = gateway.EntitySysRoleIDToUint(sysRoleID)
	}
	return Users(users)
}

func (u Users) seed(db *gorm.DB) {
	for _, user := range u {
		if !db.First(&model.AppRole{}, user.ID).RecordNotFound() {
			continue
		}
		db.Create(&user)
	}
}
