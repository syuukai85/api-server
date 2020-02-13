package gateway

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
)

const (
	groupNotFound = "グループが見つかりませんでした"
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

// FindByID IDからグループを検索
func (g *Group) FindByID(groupID entity.GroupID) (*entity.Group, *entity.Error) {
	var group model.Group

	stringGroupID := fmt.Sprint(groupID)
	firstGroup := g.db.First(&group, stringGroupID)

	if firstGroup.Error != nil {
		return nil, &entity.Error{
			Code:   http.StatusNotFound,
			Errors: []string{groupNotFound},
		}
	}

	entityGroup := &entity.Group{
		ID:          entity.GroupID(stringGroupID),
		ColorCode:   group.ColorCode,
		Name:        group.Name,
		Description: group.Description,
		Domain:      group.Domain,
		ImageURL:    group.ImageURL,
	}

	return entityGroup, nil
}
