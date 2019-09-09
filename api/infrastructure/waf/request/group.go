package request

import (
	"fmt"

	"github.com/connthass/connthass/api/entity"
)

type GetGroupByID struct {
	GroupID string `uri:"groupId" binding:"required"`
}

// Group グループ
type Group struct {
	ID          string `json:"id" validate:"required"`
	Name        string `json:"name" validate:"gte=1,lte=50"`
	Description string `json:"description" validate:"max=20000,omitempty"`
	Domain      string `json:"domain" validate:"max=255,omitempty"`
	ColorCode   string `json:"colorCode" validate:"len=7,omitempty"`
	ImageURL    string `json:"imageUrl" validate:"uri,max=255,omitempty"`
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
