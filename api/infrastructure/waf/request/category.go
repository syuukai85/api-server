package request

import (
	"fmt"

	"github.com/connthass/connthass/api/entity"
)

// CategoryID カテゴリID
type CategoryID string

// Category 例）Go, React, もくもく
type Category struct {
	ID   string `json:"id" validate:"required"`
	Name string `json:"name" validate:"omitempty,gte=1,lte=50"`
}

func categoriesToEntities(categories []*Category) []*entity.Category {
	entityCategories := make([]*entity.Category, 0)
	for _, category := range categories {
		entityCategory := &entity.Category{
			ID:   entity.CategoryID(fmt.Sprint(category.ID)),
			Name: category.Name,
		}
		entityCategories = append(entityCategories, entityCategory)
	}

	return entityCategories
}
