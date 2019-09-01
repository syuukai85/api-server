import * as messages from '../messages';
import * as constants from '../constants';
import * as Yup from 'yup';

export * from './addEvent';

export const numberRange = (prefix: string, min: number, max: number) =>
  Yup.number()
    .required(messages.validate.required(prefix))
    .min(min, messages.validate.minNumber(min))
    .max(max, messages.validate.maxNumber(max));

export const startDate = (prefix: string) =>
  Yup.date()
    .nullable()
    .min(new Date(), messages.validate.overStartDate(prefix))
    .required(messages.validate.required(prefix));

export const endDate = (prefix: string, startDateRef: string) =>
  Yup.date()
    .nullable()
    .min(Yup.ref(startDateRef), messages.validate.overStartDate(prefix))
    .required(messages.validate.required(prefix));

export const stringLengthRange = (prefix: string, min: number, max: number) => {
  return Yup.string()
    .required(messages.validate.required(prefix))
    .min(min, messages.validate.minString(min))
    .max(max, messages.validate.maxString(max));
};

export const stringMinLength = (prefix: string, min: number) =>
  Yup.string()
    .required(messages.validate.required(prefix))
    .min(min, messages.validate.minString(min));

export const file = (prefix: string) =>
  Yup.mixed()
    .required(messages.validate.required(prefix))
    .test(
      'fileSize',
      messages.validate.fileSizeLarge(constants.validate.file.size),
      value => value && value.size <= constants.validate.file.size
    )
    .test(
      'fileFormat',
      messages.validate.unsupportedFormat(constants.validate.file.formats.map(format => format.replace('image/', ''))),
      value => value && constants.validate.file.formats.includes(value.type)
    );

export const colorCode = () => Yup.string().required(messages.validate.required('ヘッダー画像のカラー設定'));
