import { Event } from 'typescript-fetch-api';
import * as H from 'history';

export interface AddEventFormProps {
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
