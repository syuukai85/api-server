package entity

type GroupID string

type Group struct {
	ID          GroupID `json:"id"`
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Domain      string  `json:"domain"`
	ColorCode   string  `json:"colorCode"`
	ImageURL    string  `json:"imageUrl"`
}
