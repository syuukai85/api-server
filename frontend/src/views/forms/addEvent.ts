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
  holdEndDate: Date;
  holdStartDate: Date;
  imageFile: File;
  organizers: SelectValue[];
  qrCodeFile: File;
  recruitEndDate: Date;
  recruitStartDate: Date;
  title: string;
  venue: SelectValue;
};

export type FormValues = {
  capacity: number;
  categories: SelectValue[];
  colorCode: string;
  description: string;
  group: SelectValue;
  holdEndDate: Date;
  holdStartDate: Date;
  imageFile: File;
  organizers: SelectValue[];
  qrCodeFile: File;
  recruitEndDate: Date;
  recruitStartDate: Date;
  title: string;
  venue: SelectValue;
};

const mapPropsToValues = (props: AddEventFormInitValues) => ({
  capacity: props.capacity || 0,
  categories: props.categories || [],
  colorCode: props.colorCode || '#F9F9F9',
  description: props.description || '',
  group: props.group || null,
  holdEndDate: props.holdEndDate || null,
  holdStartDate: props.holdStartDate || null,
  imageFile: props.imageFile || null,
  organizers: props.organizers || [],
  qrCodeFile: props.qrCodeFile || null,
  recruitEndDate: props.recruitEndDate || null,
  recruitStartDate: props.recruitStartDate || null,
  title: props.title || '',
  venue: props.venue || null
});

const validateSchema = Yup.object().shape({
  capacity: validates.numberRange('募集人数', constants.validate.capacity.min, constants.validate.capacity.max),
  colorCode: validates.colorCode(),
  description: validates.stringMinLength('説明', constants.validate.description.minLength),
  holdEndDate: validates.endDate('開催終了日時', 'holdStartDate'),
  holdStartDate: validates.startDate('開催開始日時'),
  imageFile: validates.file('ヘッダー画像'),
  organizers: validates.organizers(),
  qrCodeFile: validates.file('投げ銭QRコード画像'),
  recruitEndDate: validates.endDate('募集終了日時', 'recruitStartDate'),
  recruitStartDate: validates.startDate('募集開始日時'),
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
