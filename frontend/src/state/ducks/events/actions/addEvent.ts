import { ActionTypes } from '../types';
import { Event } from 'typescript-fetch-api';

const addEvent = (event: Event) => {
  return {
    type: ActionTypes.REQUEST_ADD_EVENT,
    isLoading: true,
    event,
  };
};

const addSuccessEvent = (addedEventId: number) => {
  return {
    type: ActionTypes.SUCCESS_ADD_EVENT,
    addedEventId: addedEventId,
    isLoading: false,
  };
};

const addErrorEvent = (error: Error) => {
  return {
    type: ActionTypes.ERROR_ADD_EVENT,
    isLoading: false,
    error,
  };
};

export type AddEventAction = ReturnType<typeof addEvent> &
  ReturnType<typeof addSuccessEvent> &
  ReturnType<typeof addErrorEvent>;

export default {
  addEvent,
  addSuccessEvent,
  addErrorEvent,
};
