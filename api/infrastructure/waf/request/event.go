package request

import (
	"strconv"
	"time"

	"github.com/connthass/connthass/api/entity"
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
	ColorCode        string      `json:"colorCode"`
	Title            string      `json:"title" validate:"gte=1,lte=50"`
	Description      string      `json:"description" validate:"max=20000,omitempty"`
	Capacity         string      `json:"capacity" validate:"numeric,min=1,max=8,omitempty"`
	ImageURL         string      `json:"imageUrl" validate:"uri,max=255"`
	QRCodeURL        string      `json:"qrCodeUrl" validate:"uri,max=255"`
	HoldStartDate    time.Time   `json:"holdStartDate" validate:"gte"`
	HoldEndDate      time.Time   `json:"holdEndDate" validate:"gte"`
	RecruitStartDate time.Time   `json:"recruitStartDate" validate:"gte"`
	RecruitEndDate   time.Time   `json:"recruitEndDate" validate:"gte"`
	Group            *Group      `json:"group"`
	Venue            *Venue      `json:"venue" validate:"omitempty"`
	Entries          []*User     `json:"entries"`
	Organizer        []*User     `json:"organizer" validate:"min=1"`
	Categories       []*Category `json:"categories"`
}

func (ae *AddEvent) ToEntity() *entity.Event {
	capacity, _ := strconv.ParseUint(ae.Capacity, 10, 64)
	return &entity.Event{
		ColorCode:        ae.ColorCode,
		Title:            ae.Title,
		Description:      ae.Description,
		Capacity:         capacity,
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
