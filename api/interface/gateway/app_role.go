package gateway

import (
	"fmt"
	"strconv"

	"github.com/connthass/connthass/api/entity"
)

func EntityAppRoleIDToUint(entityAppRoleID entity.AppRoleID) *uint64 {
	appRoleID, _ := strconv.ParseUint(fmt.Sprint(entityAppRoleID), 10, 64)
	return &appRoleID
}
