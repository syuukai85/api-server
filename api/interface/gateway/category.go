package gateway

import (
	"fmt"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
)

func categoriesToEntities(categories []model.Category) []entity.Category {

	var entityCategories []entity.Category

	for _, category := range categories {
		entityCategoriy := entity.Category{
			ID:   entity.CategoryID(fmt.Sprint(category.ID)),
			Name: category.Name,
		}
		entityCategories = append(entityCategories, entityCategoriy)
	}

	return entityCategories
}
