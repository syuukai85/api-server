import { Event } from 'typescript-fetch-api';

export type AddEventFormProps = {
  isLoading: boolean;
  error: Error;
  addEvent: (event: Event) => void;
  isValidFileFormat: (format: string) => boolean;
};
