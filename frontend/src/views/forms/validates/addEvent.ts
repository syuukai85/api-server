import * as messages from '../messages';
import * as Yup from 'yup';

export const venue = () =>
  Yup.object()
    .nullable()
    .required(messages.validate.required('開催場所'));

export const organizers = () => Yup.array().required(messages.validate.required('主催者'));
