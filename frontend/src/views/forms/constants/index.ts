export const validate = {
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
