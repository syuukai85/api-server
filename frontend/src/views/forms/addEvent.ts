import * as Yup from 'yup';
import { validate } from '@babel/types';

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
    size: 160 * 1024,
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

const validateSchema = Yup.object().shape({
  capacity: Yup.number()
    .required()
    .min(validateConstants.capacity.min)
    .max(validateConstants.capacity.max),
  colorCode: Yup.string().required(),
  description: Yup.string()
    .required()
    .min(validateConstants.description.minLength),
  holdEndDate: Yup.date().required(),
  holdStartDate: Yup.date().required(),
  imageFile: Yup.mixed()
    .required()
    .test(
      'fileSize',
      'File too large',
      value => value && value.size <= validateConstants.file.size
    )
    .test(
      'fileFormat',
      'Unsupported Format',
      value => value && validateConstants.file.formats.includes(value.type)
    ),
  organizers: Yup.object().required(),
  qrCodeFile: Yup.mixed()
    .required()
    .test(
      'fileSize',
      'File too large',
      value => value && value.size <= validateConstants.file.size
    )
    .test(
      'fileFormat',
      'Unsupported Format',
      value => value && validateConstants.file.formats.includes(value.type)
    ),
  recruitEndDate: Yup.date().required(),
  recruitStartDate: Yup.date().required(),
  title: Yup.string()
    .required()
    .min(validateConstants.title.minLength)
    .max(validateConstants.title.maxLength),
  venue: Yup.object().required()
});

export default {
  mapPropsToValues,
  validateSchema
};
