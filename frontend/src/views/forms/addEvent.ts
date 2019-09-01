import * as Yup from 'yup';

// react-selectで選択されたformの値を保持する型
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

const validateConstants = {
  file: {
    size: 1 * 1024 * 1024,
    formats: ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
  },
  capacity: {
    max: 1024,
    min: 1
  },
  description: {
    minLength: 1
  },
  title: {
    minLength: 1,
    maxLength: 1024
  }
};

/**
 * NOTE: 現在は日本語のみの対応なので、メッセージ表示を純粋関数で表現している
 * i18n対応の場合は別途対応が必須。
 */
const validateMessages = {
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

const validateSchema = Yup.object().shape({
  capacity: Yup.number()
    .required(validateMessages.required('募集人数'))
    .min(
      validateConstants.capacity.min,
      validateMessages.minNumber(validateConstants.capacity.min)
    )
    .max(
      validateConstants.capacity.max,
      validateMessages.maxNumber(validateConstants.capacity.max)
    ),
  colorCode: Yup.string().required(
    validateMessages.required('ヘッダー画像のカラー設定')
  ),
  description: Yup.string()
    .required(validateMessages.required('説明'))
    .min(
      validateConstants.description.minLength,
      validateMessages.minString(validateConstants.description.minLength)
    ),
  holdEndDate: Yup.date()
    .nullable()
    .min(
      Yup.ref('recruitStartDate'),
      validateMessages.overStartDate('開催終了日時')
    )
    .required(validateMessages.required('開催終了日時')),
  holdStartDate: Yup.date()
    .nullable()
    .required(validateMessages.required('開催開始日時'))
    .min(new Date(), validateMessages.overNowDate('開催開始日時')),
  imageFile: Yup.mixed()
    .required(validateMessages.required('ヘッダー画像'))
    .test(
      'fileSize',
      validateMessages.fileSizeLarge(validateConstants.file.size),
      value => value && value.size <= validateConstants.file.size
    )
    .test(
      'fileFormat',
      validateMessages.unsupportedFormat(
        validateConstants.file.formats.map(format =>
          format.replace('image/', '')
        )
      ),
      value => value && validateConstants.file.formats.includes(value.type)
    ),
  organizers: Yup.array().required(validateMessages.required('主催者')),
  qrCodeFile: Yup.mixed()
    .required(validateMessages.required('投げ銭QRコード画像'))
    .test(
      'fileSize',
      validateMessages.fileSizeLarge(validateConstants.file.size),
      value => value && value.size <= validateConstants.file.size
    )
    .test(
      'fileFormat',
      validateMessages.unsupportedFormat(
        validateConstants.file.formats.map(format =>
          format.replace('image/', '')
        )
      ),
      value => value && validateConstants.file.formats.includes(value.type)
    ),
  recruitEndDate: Yup.date()
    .nullable()
    .required(validateMessages.required('募集終了日時'))
    .min(
      Yup.ref('recruitStartDate'),
      validateMessages.overStartDate('募集終了日時')
    ),
  recruitStartDate: Yup.date()
    .nullable()
    .required(validateMessages.required('募集開始日時'))
    .min(new Date(), validateMessages.overNowDate('募集開始日時')),
  title: Yup.string()
    .required(validateMessages.required('イベント名'))
    .min(
      validateConstants.title.minLength,
      validateMessages.minString(validateConstants.title.minLength)
    )
    .max(
      validateConstants.title.maxLength,
      validateMessages.maxString(validateConstants.title.maxLength)
    ),
  venue: Yup.object().required()
});

export default {
  mapPropsToValues,
  validateSchema
};
