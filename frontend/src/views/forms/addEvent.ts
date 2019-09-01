import * as Yup from 'yup';
import * as messages from './messages';
import * as constants from './constants';

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
  capacity: Yup.number()
    .required(messages.validate.required('募集人数'))
    .min(
      constants.validate.capacity.min,
      messages.validate.minNumber(constants.validate.capacity.min)
    )
    .max(
      constants.validate.capacity.max,
      messages.validate.maxNumber(constants.validate.capacity.max)
    ),
  colorCode: Yup.string().required(
    messages.validate.required('ヘッダー画像のカラー設定')
  ),
  description: Yup.string()
    .required(messages.validate.required('説明'))
    .min(
      constants.validate.description.minLength,
      messages.validate.minString(constants.validate.description.minLength)
    ),
  holdEndDate: Yup.date()
    .nullable()
    .min(
      Yup.ref('recruitStartDate'),
      messages.validate.overStartDate('開催終了日時')
    )
    .required(messages.validate.required('開催終了日時')),
  holdStartDate: Yup.date()
    .nullable()
    .required(messages.validate.required('開催開始日時'))
    .min(new Date(), messages.validate.overNowDate('開催開始日時')),
  imageFile: Yup.mixed()
    .required(messages.validate.required('ヘッダー画像'))
    .test(
      'fileSize',
      messages.validate.fileSizeLarge(constants.validate.file.size),
      value => value && value.size <= constants.validate.file.size
    )
    .test(
      'fileFormat',
      messages.validate.unsupportedFormat(
        constants.validate.file.formats.map(format =>
          format.replace('image/', '')
        )
      ),
      value => value && constants.validate.file.formats.includes(value.type)
    ),
  organizers: Yup.array().required(messages.validate.required('主催者')),
  qrCodeFile: Yup.mixed()
    .required(messages.validate.required('投げ銭QRコード画像'))
    .test(
      'fileSize',
      messages.validate.fileSizeLarge(constants.validate.file.size),
      value => value && value.size <= constants.validate.file.size
    )
    .test(
      'fileFormat',
      messages.validate.unsupportedFormat(
        constants.validate.file.formats.map(format =>
          format.replace('image/', '')
        )
      ),
      value => value && constants.validate.file.formats.includes(value.type)
    ),
  recruitEndDate: Yup.date()
    .nullable()
    .required(messages.validate.required('募集終了日時'))
    .min(
      Yup.ref('recruitStartDate'),
      messages.validate.overStartDate('募集終了日時')
    ),
  recruitStartDate: Yup.date()
    .nullable()
    .required(messages.validate.required('募集開始日時'))
    .min(new Date(), messages.validate.overNowDate('募集開始日時')),
  title: Yup.string()
    .required(messages.validate.required('イベント名'))
    .min(
      constants.validate.title.minLength,
      messages.validate.minString(constants.validate.title.minLength)
    )
    .max(
      constants.validate.title.maxLength,
      messages.validate.maxString(constants.validate.title.maxLength)
    ),
  venue: Yup.object()
    .nullable()
    .required(messages.validate.required('開催場所'))
});

export default {
  mapPropsToValues,
  validateSchema
};
