import { Category, Group, User, Venue } from 'typescript-fetch-api';
import * as Yup from 'yup';

export type AddEventFormInitValues = {
  capacity: number;
  categories: Category[];
  colorCode: string;
  description: string;
  group: Group;
  holdEndDate: Date;
  holdStartDate: Date;
  imageUrl: string;
  organizer: User[];
  qrCodeUrl: string;
  recruitEndDate: Date;
  recruitStartDate: Date;
  title: string;
  venue: Venue;
};

export type FormValues = {
  capacity: number;
  categories: Category[];
  colorCode: string;
  description: string;
  group: Group;
  holdEndDate: Date;
  holdStartDate: Date;
  imageUrl: string;
  organizer: User[];
  qrCodeUrl: string;
  recruitEndDate: Date;
  recruitStartDate: Date;
  title: string;
  venue: Venue;
};

const mapPropsToValues = (props: AddEventFormInitValues) => ({
  capacity: props.capacity || 0,
  categories: props.categories || [],
  colorCode: props.colorCode || '',
  description: props.description || '',
  group: props.group || null,
  holdEndDate: props.holdEndDate || null,
  holdStartDate: props.holdStartDate || null,
  imageUrl: props.imageUrl || '',
  organizer: props.organizer || [],
  qrCodeUrl: props.qrCodeUrl || '',
  recruitEndDate: props.recruitEndDate || null,
  recruitStartDate: props.recruitStartDate || null,
  title: props.title || '',
  venue: props.venue || null
});

const validateSchema = Yup.object().shape({
  capacity: Yup.number().required(),
  categories: Yup.array(),
  colorCode: Yup.string(),
  description: Yup.string().required(),
  group: Yup.object().required(),
  holdEndDate: Yup.date().required(),
  holdStartDate: Yup.date().required(),
  imageUrl: Yup.string().url(),
  organizer: Yup.object().required(),
  qrCodeUrl: Yup.string().url(),
  recruitEndDate: Yup.date().required(),
  recruitStartDate: Yup.date().required(),
  title: Yup.string().required(),
  venue: Yup.object().required()
});

export default {
  mapPropsToValues,
  validateSchema
};
