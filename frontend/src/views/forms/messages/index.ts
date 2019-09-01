/**
 * NOTE: 現在は日本語のみの対応なので、メッセージ表示を純粋関数で表現している
 * i18n対応の場合は別途対応が必須。
 */
export const validate = {
  minNumber: (num: number) => `${num}以下の数字を入力してください`,
  maxNumber: (num: number) => `${num}以上の数字を入力してください`,
  minString: (str: number) => `${str}文字以内の文字列を入力してください`,
  maxString: (str: number) => `${str}文字以内の文字列を入力してください`,
  unsupportedFormat: (formats: Array<string>) =>
    `対応のファイル形式ではありません。対応フォーマット: ${formats.reduce(
      (prev, format) => prev + ',' + format
    )}`,
  fileSizeLarge: (fileSize: number) =>
    `ファイルサイズは${fileSize / 1024 / 1024}MBまでです`,
  required: (param: string) => `${param}は必須項目です`,
  overStartDate: (param: string) =>
    `${param}は開始時間よりも後の時間を入力する必要があります`,
  overNowDate: (param: string) =>
    `${param}は今の時間よりも後の時間を入力する必要があります`
};
