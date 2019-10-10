package request

import (
	"fmt"

	"github.com/connthass/connthass/api/entity"
)

// Group グループ
type Group struct {
	ID          string `json:"id" validate:"required"`
	Name        string `json:"name" validate:"gte=1,lte=50"`
	Description string `json:"description" validate:"omitempty,max=20000"`
	Domain      string `json:"domain" validate:"omitempty,max=255"`
	ColorCode   string `json:"colorCode" validate:"omitempty,len=7"`
	ImageURL    string `json:"imageUrl" validate:"omitempty,uri,max=255"`
}

func (g *Group) ToEntity() *entity.Group {
	if g == nil {
		return nil
	}
	return &entity.Group{
		ID:          entity.GroupID(fmt.Sprint(g.ID)),
		Name:        g.Name,
		Description: g.Description,
		Domain:      g.Domain,
		ColorCode:   g.ColorCode,
		ImageURL:    g.ImageURL,
	}
}
