package gateway

import (
	"fmt"
	"strconv"

	"github.com/syuukai85/api-server/api/entity"
	"github.com/syuukai85/api-server/api/infrastructure/orm"
	"github.com/syuukai85/api-server/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
)

// Group DBモデルとやり取りをする
type Group struct {
	db *gorm.DB
}

// NewGroup コンストラクタ
func NewGroup(tx *gorm.DB) *Group {
	group := &Group{
		db: orm.GetDB(),
	}
	if tx != nil {
		group.db = tx
	}
	return group
}

func EntityGroupIDToUint(entityGroupID entity.GroupID) *uint64 {
	groupID, _ := strconv.ParseUint(fmt.Sprint(entityGroupID), 10, 64)
	return &groupID
}

func groupToEntity(group model.Group) *entity.Group {
	if group.ID == nil {
		return nil
	}
	entityGroup := &entity.Group{
		ID:          entity.GroupID(fmt.Sprint(group.ID)),
		Name:        group.Name,
		Description: group.Description,
		Domain:      group.Domain,
		ColorCode:   group.ColorCode,
		ImageURL:    group.ImageURL,
	}

	return entityGroup
}

func groupToModel(group *entity.Group) model.Group {
	groupID := EntityGroupIDToUint(group.ID)
	modelGroup := model.Group{
		Name:        group.Name,
		Description: group.Description,
		Domain:      group.Domain,
		ImageURL:    group.ImageURL,
	}
	modelGroup.ID = groupID
	modelGroup.ColorCode = group.ColorCode
	return modelGroup
}
