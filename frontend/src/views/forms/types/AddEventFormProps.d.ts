import { Event } from 'typescript-fetch-api';

export type AddEventFormProps = {
  isLoading: boolean;
  error: Error;
  addedEventId?: number;
  isExistsError: boolean;
  history: H.History;
  addEvent: (event: Event) => void;
  isValidFileFormat: (format: string) => boolean;
  showErrorMessage: (message: string) => void;
  showNotificationSuccess: () => void;
  showNotificationError: () => void;
  moveEventDetail: (addedEventId: number, history: H.History) => void
};
