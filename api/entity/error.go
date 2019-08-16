package entity

import "strings"

// Error errorインターフェースを実装した構造体
type Error struct {
	Code   int
	Errors []string
}

func (e *Error) Error() string {
	return strings.Join(e.Errors, "\n")
}
