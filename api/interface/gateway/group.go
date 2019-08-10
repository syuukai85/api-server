package gateway

import (
	"fmt"
	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/database/model"
)

func groupToEntity(group model.Group) entity.Group {
	entityGroup := entity.Group{
		ID:          entity.GroupID(fmt.Sprint(group.ID)),
		Name:        group.Name,
		Description: group.Description,
		Domain:      group.Domain,
		ColorCode:   group.ColorCode,
		ImageURL:    group.ImageURL,
	}

	return entityGroup
}
