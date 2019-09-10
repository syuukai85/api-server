package request

import (
	"fmt"

	"github.com/connthass/connthass/api/entity"
)

// CategoryID カテゴリID
type CategoryID string

// Categories カテゴリ郡
type Categories []*Category

// Category 例）Go, React, もくもく
type Category struct {
	ID   string `json:"id" validate:"required"`
	Name string `json:"name" validate:"gte=1,lte=50"`
}

// ToEntities エンティティに変換
func (c Categories) ToEntities() []*entity.Category {
	entityCategories := make([]*entity.Category, len(c))
	for index, category := range c {
		entityCategory := &entity.Category{
			ID:   entity.CategoryID(fmt.Sprint(category.ID)),
			Name: category.Name,
		}
		entityCategories[index] = entityCategory
	}

	return entityCategories
}
