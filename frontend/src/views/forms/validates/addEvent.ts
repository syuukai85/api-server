import * as Yup from 'yup';

/**
 * 開催場所のバリデーションスキーマ
 */
export const venue = () => Yup.object().nullable();

/**
 * 主催者のバリデーションスキーマ
 */
export const organizers = () => Yup.array().nullable();
