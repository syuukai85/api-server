package gateway

import (
	"github.com/syuukai85/api-server/api/entity"
	"github.com/syuukai85/api-server/api/infrastructure/orm"
	"github.com/syuukai85/api-server/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
)

func makeEntry(entityUserID entity.UserID, entityEventID entity.EventID, appRoleID entity.AppRoleID) model.EntryEvent {
	userID := entityUserIDToUint(entityUserID)
	eventID := entityEventIDToUint(entityEventID)

	entry := model.EntryEvent{
		UserID:    userID,
		EventID:   eventID,
		AppRoleID: EntityAppRoleIDToUint(appRoleID),
	}

	return entry
}

func entryEventTransact(entityUsers []*entity.User, entityEventID entity.EventID, appRoleID entity.AppRoleID) func(tx *gorm.DB) (interface{}, error) {

	insertValues := make([]interface{}, len(entityUsers))

	for index, entityUser := range entityUsers {
		insertValues[index] = makeEntry(entityUser.ID, entityEventID, appRoleID)
	}

	return func(tx *gorm.DB) (interface{}, error) {
		err := orm.Bulkinsert(tx, insertValues)
		if err != nil {
			return nil, err
		}
		return len(insertValues), nil
	}
}
