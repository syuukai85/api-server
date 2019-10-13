package gateway

import (
	"fmt"
	"strconv"

	"github.com/connthass/connthass/api/entity"
)

func EntitySysRoleIDToUint(entitySysRoleID entity.SysRoleID) *uint64 {
	sysRoleID, _ := strconv.ParseUint(fmt.Sprint(entitySysRoleID), 10, 64)
	return &sysRoleID
}
