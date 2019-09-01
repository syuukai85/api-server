package gateway

import (
	"fmt"
	"strconv"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
)

// Venue DBモデルとやり取りをする
type Venue struct {
	db *gorm.DB
}

// NewVenue コンストラクタ
func NewVenue(tx *gorm.DB) *Venue {
	venue := &Venue{
		db: orm.GetDB(),
	}
	if tx != nil {
		venue.db = tx
	}
	return venue
}

func venueToEntity(venue model.Venue) *entity.Venue {
	if venue.ID == 0 {
		return nil
	}
	entityVenue := &entity.Venue{
		ID:   entity.VenueID(fmt.Sprint(venue.ID)),
		Name: venue.Name,
	}

	return entityVenue
}

func venueToModel(venue *entity.Venue) model.Venue {
	venueID, _ := strconv.ParseUint(fmt.Sprint(venue.ID), 10, 64)
	modelVenue := model.Venue{
		Name: venue.Name,
	}
	modelVenue.ID = venueID

	return modelVenue
}

// FindByEntityGroup エンティティのからユーザを取得
func (g *Group) FindByEntityGroup(entityGroup *entity.Group) (*entity.Group, *entity.Error) {
	groupID, _ := strconv.ParseUint(fmt.Sprint(entityGroup.ID), 10, 64)
	condition := &model.Group{
		Name: entityGroup.Name,
	}
	condition.ID = groupID

	var group model.Group
	firstGroup := g.db.Where(condition).First(&group)
	if firstGroup.RecordNotFound() {
		return nil, &entity.Error{}
	}

	return groupToEntity(group), nil
}

// IsExistsEntityGroup グループの存在確認
func (g *Group) IsExistsEntityGroup(entityGroup *entity.Group) bool {
	_, err := g.FindByEntityGroup(entityGroup)
	if err != nil {
		return false
	}
	return true
}
