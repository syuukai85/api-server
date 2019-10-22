package request

import (
	"time"

	"github.com/syuukai85/api-server/api/entity"
)

type SearchEvents struct {
	Fields  string `form:"fields"`
	Query   string `form:"query"`
	Page    string `form:"page"`
	PerPage string `form:"perPage"`
}

type GetEventByID struct {
	EventID string `uri:"eventId" binding:"required"`
}

type AddEvent struct {
	ColorCode        string      `json:"colorCode" validate:"omitempty"`
	Title            string      `json:"title" validate:"gte=1,lte=50"`
	Description      string      `json:"description" validate:"omitempty,max=20000"`
	Capacity         *uint64     `json:"capacity" validate:"min=1,max=10000000"`
	ImageURL         string      `json:"imageUrl" validate:"omitempty,uri,max=255"`
	QRCodeURL        string      `json:"qrCodeUrl" validate:"omitempty,uri,max=255"`
	HoldStartDate    time.Time   `json:"holdStartDate" validate:"gte"`
	HoldEndDate      time.Time   `json:"holdEndDate" validate:"gte"`
	RecruitStartDate time.Time   `json:"recruitStartDate" validate:"omitempty,gte"`
	RecruitEndDate   time.Time   `json:"recruitEndDate" validate:"omitempty,gte"`
	Group            *Group      `json:"group" validate:"omitempty"`
	Venue            *Venue      `json:"venue" validate:"omitempty"`
	Entries          []*User     `json:"entries" validate:"omitempty"`
	Organizer        []*User     `json:"organizer" validate:"min=1"`
	Categories       []*Category `json:"categories" validate:"omitempty"`
}

func (ae *AddEvent) ToEntity() *entity.Event {
	return &entity.Event{
		ColorCode:        ae.ColorCode,
		Title:            ae.Title,
		Description:      ae.Description,
		Capacity:         ae.Capacity,
		ImageURL:         ae.ImageURL,
		QRCodeURL:        ae.QRCodeURL,
		HoldStartDate:    ae.HoldStartDate,
		HoldEndDate:      ae.HoldEndDate,
		RecruitStartDate: ae.RecruitStartDate,
		RecruitEndDate:   ae.RecruitEndDate,
		Group:            ae.Group.ToEntity(),
		Venue:            ae.Venue.ToEntity(),
		Entries:          usersToEntities(ae.Entries),
		Organizer:        usersToEntities(ae.Organizer),
		Categories:       categoriesToEntities(ae.Categories),
	}
}
