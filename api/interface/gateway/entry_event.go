package gateway

import (
	"errors"
	"net/http"

	"github.com/connthass/connthass/api/entity"
	"github.com/connthass/connthass/api/infrastructure/orm"
	"github.com/connthass/connthass/api/infrastructure/orm/model"
	"github.com/jinzhu/gorm"
)

const (
	createEntryEventFailure = "イベント参加に失敗しました"
)

// EntryEvent DBモデルとやり取りをする
type EntryEvent struct {
	db *gorm.DB
}

// NewEntryEvent コンストラクタ
func NewEntryEvent() *EntryEvent {
	return &EntryEvent{
		db: orm.GetDB(),
	}
}

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

// CreateEntryEvent イベント参加
func (ee *EntryEvent) CreateEntryEvent(entityEventID entity.EventID, entityEntryEvent *entity.EntryEvent) (*entity.EntryEvent, *entity.Error) {

	data, err := orm.TransactAndReturnData(ee.db, func(tx *gorm.DB) (interface{}, error) {
		_, generalEntryErr := entryEventTransact(entityEntryEvent.Entries, entityEventID, entity.GeneralEntryID)(tx)
		_, organizerEntryErr := entryEventTransact(entityEntryEvent.Organizers, entityEventID, entity.OrganizerEntryID)(tx)

		if generalEntryErr != nil || organizerEntryErr != nil {
			return nil, errors.New(createEntryEventFailure)
		}

		return entityEntryEvent, nil
	})

	if err != nil {
		return nil, &entity.Error{
			Code:   http.StatusUnprocessableEntity,
			Errors: []string{err.Error()},
		}
	}

	return data.(*entity.EntryEvent), nil
}
