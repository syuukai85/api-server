package request

import (
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
	ColorCode        string     `json:"colorCode"`
	Title            string     `json:"title" validate:"gte=1,lte=50"`
	Description      string     `json:"description" validate:"max=20000,omitempty"`
	Capacity         uint64     `json:"capacity" validate:"max=10000000,omitempty"`
	ImageURL         string     `json:"imageUrl" validate:"uri,max=255"`
	QRCodeURL        string     `json:"qrCodeUrl" validate:"uri,max=255"`
	HoldStartDate    time.Time  `json:"holdStartDate" validate:"gte"`
	HoldEndDate      time.Time  `json:"holdEndDate" validate:"gte"`
	RecruitStartDate time.Time  `json:"recruitStartDate" validate:"gte"`
	RecruitEndDate   time.Time  `json:"recruitEndDate" validate:"gte"`
	Group            *Group     `json:"group"`
	Venue            *Venue     `json:"venue"`
	Entries          Users      `json:"entries"`
	Organizers       Users      `json:"organizers" validate:"min=1"`
	Categories       Categories `json:"categories" validate:"omitempty"`
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
		Entries:          ae.Entries.ToEntities(),
		Organizers:       ae.Organizers.ToEntities(),
		Categories:       ae.Categories.ToEntities(),
	}
}
