import * as Yup from 'yup';
import * as constants from './constants';
import * as messages from './messages';
import * as validates from './validates';
import moment from 'moment';

// react-selectで選択されたformの値を保持する型
// TODO: 選択されたlabelがいらない。削除して対象のカラムに対してnumberのみを保持するようにする
type SelectValue = { value: number; label: string };

export type FormValues = {
  title: string;
  description: string;
  colorCode: string;
  imageFile: File;
  qrCodeFile: File;
  capacity: number;
  recruitStartDate: Date;
  recruitEndDate: Date;
  holdStartDate: Date;
  holdEndDate: Date;
  organizers: SelectValue[];
  venue: SelectValue;
  categories: SelectValue[];
  group: SelectValue;
};

export type AddEventFormInitValues = FormValues;

/**
 * 初期値を決定するpropsの値
 *
 * @param {AddEventFormInitValues} props 親componentから送られきたprops
 */
const mapPropsToValues = (props: AddEventFormInitValues) => ({
  title: props.title || '',
  description: props.description || '',
  colorCode: props.colorCode || '#F9F9F9',
  imageFile: props.imageFile || null,
  qrCodeFile: props.qrCodeFile || null,
  capacity: props.capacity || 0,
  recruitStartDate: props.recruitStartDate || new Date(),
  recruitEndDate: props.recruitEndDate || moment(new Date()).add(1, 'month'),
  holdStartDate: props.holdStartDate || null,
  holdEndDate: props.holdEndDate || null,
  organizers: props.organizers || [],
  venue: props.venue || null,
  categories: props.categories || [],
  group: props.group || null
});

/**
 * イベント追加時のvalidateSchema
 */
const validateSchema = Yup.object().shape({
  title: validates
    .stringLengthRange('イベント名', constants.validate.title.minLength, constants.validate.title.maxLength)
    .required(messages.validate.required('イベント名')),
  description: validates.stringMinLength('説明', constants.validate.description.minLength),
  colorCode: validates.colorCode('ヘッダー画像のカラー設定'),
  imageFile: validates.file('ヘッダー画像'),
  qrCodeFile: validates.file('投げ銭QRコード画像'),
  capacity: validates.numberMin('募集人数', constants.validate.capacity.min),
  recruitStartDate: validates.startDate('募集開始日時'),
  recruitEndDate: validates.endDate('募集終了日時', 'recruitStartDate'),
  holdStartDate: validates.startDate('開催開始日時').required(messages.validate.required('開催開始日時')),
  holdEndDate: validates.endDate('開催終了日時', 'holdStartDate').required(messages.validate.required('開催終了日時')),
  organizers: validates.organizers(),
  venue: validates.venue()
});

const isValidFileFormat = (format: string) => constants.validate.file.formats.includes(format);

export default {
  mapPropsToValues,
  validateSchema,
  isValidFileFormat
};
