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
  qrCodeUrl: string;
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
  qrCodeUrl: string;
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
  qrCodeUrl: props.qrCodeUrl || '',
  recruitEndDate: props.recruitEndDate || null,
  recruitStartDate: props.recruitStartDate || null,
  title: props.title || '',
  venue: props.venue || null
});

const validateSchema = Yup.object().shape({
  capacity: Yup.number().required()
});

export default {
  mapPropsToValues,
  validateSchema
};
