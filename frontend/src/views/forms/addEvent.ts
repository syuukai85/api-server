import * as Yup from 'yup';
import * as constants from './constants';
import * as validates from './validates';

// react-selectで選択されたformの値を保持する型
// TODO: 選択されたlabelがいらない。削除して対象のカラムに対してnumberのみを保持するようにする
type SelectValue = { value: number; label: string };

export type AddEventFormInitValues = {
  capacity: number;
  categories: SelectValue[];
  colorCode: string;
  description: string;
  group: SelectValue;
  holdStartDate: Date;
  holdEndDate: Date;
  imageFile: File;
  organizers: SelectValue[];
  qrCodeFile: File;
  recruitStartDate: Date;
  recruitEndDate: Date;
  title: string;
  venue: SelectValue;
};

export type FormValues = {
  capacity: number;
  categories: SelectValue[];
  colorCode: string;
  description: string;
  group: SelectValue;
  holdStartDate: Date;
  holdEndDate: Date;
  imageFile: File;
  organizers: SelectValue[];
  qrCodeFile: File;
  recruitStartDate: Date;
  recruitEndDate: Date;
  title: string;
  venue: SelectValue;
};

const mapPropsToValues = (props: AddEventFormInitValues) => ({
  capacity: props.capacity || 0,
  categories: props.categories || [],
  colorCode: props.colorCode || '#F9F9F9',
  description: props.description || '',
  group: props.group || null,
  holdStartDate: props.holdStartDate || null,
  holdEndDate: props.holdEndDate || null,
  imageFile: props.imageFile || null,
  organizers: props.organizers || [],
  qrCodeFile: props.qrCodeFile || null,
  recruitStartDate: props.recruitStartDate || null,
  recruitEndDate: props.recruitEndDate || null,
  title: props.title || '',
  venue: props.venue || null
});

const validateSchema = Yup.object().shape({
  capacity: validates.numberRange('募集人数', constants.validate.capacity.min, constants.validate.capacity.max),
  colorCode: validates.colorCode('ヘッダー画像のカラー設定'),
  description: validates.stringMinLength('説明', constants.validate.description.minLength),
  holdStartDate: validates.startDate('開催開始日時'),
  holdEndDate: validates.endDate('開催終了日時', 'holdStartDate'),
  imageFile: validates.file('ヘッダー画像'),
  organizers: validates.organizers(),
  qrCodeFile: validates.file('投げ銭QRコード画像'),
  recruitStartDate: validates.startDate('募集開始日時'),
  recruitEndDate: validates.endDate('募集終了日時', 'recruitStartDate'),
  title: validates.stringLengthRange(
    'イベント名',
    constants.validate.title.minLength,
    constants.validate.title.maxLength
  ),
  venue: validates.venue()
});

export default {
  mapPropsToValues,
  validateSchema
};
