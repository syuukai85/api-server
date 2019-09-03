package gateway

import (
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
)

func makeEventCategory(entityCategoryID entity.CategoryID, entityEventID entity.EventID) model.EventCategory {
	categoryID := entityCategoryIDToUint(entityCategoryID)
	eventID := entityEventIDToUint(entityEventID)

	return model.EventCategory{
		CategoryID: categoryID,
		EventID:    eventID,
	}
}

func createEventCategoriesTransact(entityCategories []*entity.Category, entityEventID entity.EventID) func(tx *gorm.DB) (interface{}, error) {
	insertValues := make([]interface{}, len(entityCategories))

	for index, entityCategoriy := range entityCategories {
		insertValues[index] = makeEventCategory(entityCategoriy.ID, entityEventID)
	}

	return func(tx *gorm.DB) (interface{}, error) {
		err := orm.Bulkinsert(tx, insertValues)
		if err != nil {
			return nil, err
		}
		return len(insertValues), nil
	}
}
