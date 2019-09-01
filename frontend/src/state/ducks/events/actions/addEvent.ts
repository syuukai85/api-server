import { ActionTypes } from '../types';
import { Event } from 'typescript-fetch-api';

const addEvent = (event: Event) => {
  return {
    type: ActionTypes.REQUEST_EVENT,
    isLoading: true,
    event,
  };
};

const addSuccessEvent = () => {
  return {
    type: ActionTypes.SUCCESS_EVENT,
    isLoading: false,
  };
};

const addErrorEvent = (error: Error) => {
  return {
    type: ActionTypes.ERROR_EVENT,
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
