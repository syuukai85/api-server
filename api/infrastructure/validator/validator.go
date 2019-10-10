package validator

import (
	"gopkg.in/go-playground/validator.v9"
)

var validate *validator.Validate

// Init 初期化
func Init() {
	validate = validator.New()
}

// ValidateStruct 構造体にバリデーションを実行
func ValidateStruct(s interface{}) error {
	return validate.Struct(s)
}
