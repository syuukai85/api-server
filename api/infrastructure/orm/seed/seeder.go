package seed

import (
	"log"

	"github.com/syuukai85/api-server/api/entity"
	"github.com/syuukai85/api-server/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
)

// Seeder シーダー
type Seeder interface {
	seed(db *gorm.DB)
}

// Seed シードを実行する
func Seed(db *gorm.DB, names ...string) {

	for _, name := range names {
		seeder := getSeeder(name)
		if seeder == nil {
			log.Printf("Seederが見つかりませんでした: %s", name)
			continue
		}
		seeder.seed(db)
	}
}

func getSeeder(name string) Seeder {
	var seeder Seeder
	switch name {
	case "group":
		seeder = NewGroup()
	case "venue":
		seeder = NewVenue()
	case "app_roles":
		seeder = NewAppRole()
	case "sys_roles":
		seeder = NewSysRole()
	case "admin_users":
		//TODO: 管理者のシード
		users := make([]model.User, 0)
		seeder = NewUsers(entity.SystemAdminID, users...)
	case "general_users":
		//TODO: 一般ユーザのシード
		users := make([]model.User, 0)
		seeder = NewUsers(entity.GeneralUserID, users...)
	}

	return seeder
}
