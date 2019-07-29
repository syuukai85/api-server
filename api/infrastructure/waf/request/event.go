package request

type SearchEventsRequestParams struct {
	Fields string `form:"fields"`
	Query string `form:"query"`
	Page string `form:"page"`
	PerPage string `form:"perPage"`
}

type GetEventByID struct {
	EventID string `form:"eventId`
}