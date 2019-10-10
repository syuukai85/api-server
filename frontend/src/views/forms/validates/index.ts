import * as messages from '../messages';
import * as constants from '../constants';
import * as Yup from 'yup';

export * from './addEvent';

/**
 * 数字の最小値のバリデーションスキーマ
 *
 * @param {string} prefix メッセージのプレフィックス
 * @param {number} min 最小値
 */
export const numberMin = (prefix: string, min: number) =>
  Yup.number()
    .typeError(messages.validate.number(prefix))
    .min(min, messages.validate.minNumber(min));

/**
 * 開始時間のバリデーションスキーマ
 *
 * NOTE: 開始時間は現在の時間より大きい時間の設定を必須項目としている。
 * そのため、それ以外の値が入る場合は修正必須
 *
 * @param {string} prefix メッセージのプレフィックス
 */
export const startDate = (prefix: string) =>
  Yup.date()
    .nullable()
    .typeError(messages.validate.date(prefix))
    .min(new Date(), messages.validate.overNowDate(prefix));

/**
 * 終了時間のバリデーションスキーマ
 *
 * NOTE: 終了時間のバリデーションは同一のスキーマ内にある開始時間の入力値より
 * 大きい必要があるため、その参照用のkeyを指定
 *
 * @param {string} prefix メッセージのプレフィックス
 * @param {string} startDateRef 開始時間の参照キー
 */
export const endDate = (prefix: string, startDateRef: string) =>
  Yup.date()
    .nullable()
    .typeError(messages.validate.date(prefix))
    .min(Yup.ref(startDateRef), messages.validate.overStartDate(prefix));

/**
 * 文字列の範囲のバリデーションスキーマ
 *
 * @param {string} prefix メッセージのプレフィックス
 * @param {number} min 最小値
 * @param {number} max 最大値
 */
export const stringLengthRange = (prefix: string, min: number, max: number) => {
  return Yup.string()
    .typeError(messages.validate.string(prefix))
    .min(min, messages.validate.minString(min))
    .max(max, messages.validate.maxString(max));
};

/**
 * 文字列の最小値のバリデーションスキーマ
 *
 * @param {string} prefix メッセージのプレフィックス
 * @param {number} min 最小値
 */
export const stringMinLength = (prefix: string, min: number) =>
  Yup.string()
    .typeError(messages.validate.string(prefix))
    .min(min, messages.validate.minString(min));

/**
 * ファイルのバリデーションスキーマ
 *
 * NOTE: 現在は、画像毎に必要となる拡張子だったり、ファイルサイズだったりをばらけさせたくないので、一律で同じ値に設定
 *
 * @param {string} prefix メッセージのプレフィックス
 */
export const file = (prefix: string) =>
  Yup.mixed()
    .nullable()
    .test('fileSize', messages.validate.fileSizeLarge(constants.validate.file.size), value => {
      if (value === null) return true;
      return value && value.size <= constants.validate.file.size;
    })
    .test(
      'fileFormat',
      messages.validate.unsupportedFormat(constants.validate.file.formats.map(format => format.replace('image/', ''))),
      value => {
        if (value === null) return true;
        return value && constants.validate.file.formats.includes(value.type);
      }
    );

/**
 * カラーコードのバリデーションスキーマ
 */
export const colorCode = (prefix: string) => Yup.string().typeError(messages.validate.string(prefix));
