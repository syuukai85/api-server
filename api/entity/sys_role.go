package entity

// SysRoleID システムでの役割
type SysRoleID int

const (
	// SystemAdminID システム管理者
	SystemAdminID SysRoleID = iota + 1

	// GeneralUserID 一般ユーザ
	GeneralUserID
)
