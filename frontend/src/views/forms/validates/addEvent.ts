import * as messages from '../messages';
import * as Yup from 'yup';

/**
 * 開催場所のバリデーションスキーマ
 */
export const venue = () =>
  Yup.object()
    .nullable()
    .required(messages.validate.required('開催場所'));

/**
 * 主催者のバリデーションスキーマ
 */
export const organizers = () =>
  Yup.array()
    .nullable()
    .required(messages.validate.required('主催者'));
