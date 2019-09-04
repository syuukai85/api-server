package entity

// GroupID グループID
type GroupID string

// Group グループ
type Group struct {
	ID          GroupID `json:"id"`
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Domain      string  `json:"domain"`
	ColorCode   string  `json:"colorCode"`
	ImageURL    string  `json:"imageUrl"`
}

const (
	// UnknownGroup グループ未設定
	UnknownGroup GroupID = "1"
)
