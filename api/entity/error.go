package entity

import "strings"

// Error errorインターフェースを実装した構造体
type Error struct {
	Code   int      `json:"-"`
	Errors []string `json:"errors"`
}

func (e *Error) Error() string {
	return strings.Join(e.Errors, "\n")
}
