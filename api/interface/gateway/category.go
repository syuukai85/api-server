package gateway

import (
	"fmt"
	"strconv"

	"github.com/syuukai85/api-server/api/entity"
	"github.com/syuukai85/api-server/api/infrastructure/orm/model"
)

func entityCategoryIDToUint(entityCategoryID entity.CategoryID) *uint64 {
	categoryID, _ := strconv.ParseUint(fmt.Sprint(entityCategoryID), 10, 64)
	return &categoryID
}

func categoriesToEntities(categories []model.Category) []*entity.Category {
	entityCategories := make([]*entity.Category, 0)

	for _, category := range categories {
		entityCategoriy := &entity.Category{
			ID:   entity.CategoryID(fmt.Sprint(category.ID)),
			Name: category.Name,
		}
		entityCategories = append(entityCategories, entityCategoriy)
	}

	return entityCategories
}

func categoryToModel(category *entity.Category) model.Category {
	modelCategory := model.Category{
		Name: category.Name,
	}
	return modelCategory
}

func categoriesToModels(categories []*entity.Category) []model.Category {
	modelCategories := make([]model.Category, 0)

	for _, category := range categories {
		modelCategories = append(modelCategories, categoryToModel(category))
	}

	return modelCategories
}
