package seed

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
)

// AppRoles シードデータ配列
type AppRoles []model.AppRole

// NewAppRole コンストラクタ
func NewAppRole() AppRoles {
	return AppRoles{
		{
			model.Base{
				ID: uint64(entity.SystemAdminID),
			},
			model.BaseRole{
				Name: "general",
			},
		},
		{
			model.Base{
				ID: uint64(entity.GeneralUserID),
			},
			model.BaseRole{
				Name: "organizer",
			},
		},
	}
}

func (ar AppRoles) seed(db *gorm.DB) {
	for _, appRole := range ar {
		if !db.First(&model.AppRole{}, appRole.ID).RecordNotFound() {
			continue
		}
		db.Create(&appRole)
	}
}
