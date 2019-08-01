package request

type SearchEvents struct {
	Fields  string `form:"fields"`
	Query   string `form:"query"`
	Page    string `form:"page"`
	PerPage string `form:"perPage"`
}

type GetEventByID struct {
	EventID string `uri:"eventId" binding:"required"`
}
