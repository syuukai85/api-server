import { takeEvery, call, put } from 'redux-saga/effects';
import {
  default as actions,
  SearchEventAction,
  AddEventAction
} from './actions';
import {
  EventApi,
  SearchEventsRequest,
  AddEventRequest
} from 'typescript-fetch-api';
import { ActionTypes } from './types';
import moment from 'moment';

let api = new EventApi();

const searchEventsRequest = (req: SearchEventsRequest) => {
  return api
    .searchEvents(req)
    .then(events => events)
    .catch(error => {
      throw new Error(error.message);
    });
};

const addEventRequest = (req: AddEventRequest) => {
  return api
    .addEvent(req)
    .then(events => events)
    .catch(error => {
      throw new Error(error.message);
    });
};

function* searchEvent(action: SearchEventAction) {
  try {
    // TODO: 検索条件のformatをどうする？
    const events = yield call(searchEventsRequest, {
      query: `eventId:${action.eventId}`
    });
    yield put(actions.searchEvent.searchSuccessEvent(events[0]));
  } catch (error) {
    yield put(actions.searchEvent.searchErrorEvent(error));
  }
}

function* addEvent(action: AddEventAction) {
  try {
    // TODO: Eventのkeyが先頭大文字になってるがために記述が冗長。swagger側の修正必須
    yield call(addEventRequest, { Event: action.event });
    yield put(actions.addEvent.addSuccessEvent());
  } catch (error) {
    yield put(actions.addEvent.addErrorEvent(error));
  }
}

function* searchRecentlyAddedEvent() {
  try {
    const events = yield call(searchEventsRequest, { perPage: 5 });
    yield put(
      actions.searchRecentlyAddedEvent.searchSuccessRecentlyAddedEvent(events)
    );
  } catch (error) {
    yield put(
      actions.searchRecentlyAddedEvent.searchErrorRecentlyAddedEvent(error)
    );
  }
}

function* searchRecentlyFinishedEvent() {
  try {
    const events = yield call(searchEventsRequest, {
      // TODO: 検索条件のformatをどうする？
      // 開催が終了していて、現在ログインしているユーザーが参加したイベントを表示
      query: `holdEndDate>${moment(new Date()).format('YYYY-MM-DD-hh-mm-ss')}`,
      perPage: 5
    });
    yield put(
      actions.searchRecentlyFinishedEvent.searchSuccessRecentlyFinishedEvent(
        events
      )
    );
  } catch (error) {
    yield put(
      actions.searchRecentlyFinishedEvent.searchErrorRecentlyFinishedEvent(
        error
      )
    );
  }
}

const sagas = [
  takeEvery(ActionTypes.REQUEST_EVENT, searchEvent),
  takeEvery(ActionTypes.REQUEST_ADD_EVENT, addEvent),
  takeEvery(ActionTypes.REQUEST_NEWLY_EVENT, searchRecentlyAddedEvent),
  takeEvery(ActionTypes.REQUEST_FINISHED_EVENT, searchRecentlyFinishedEvent)
];

export default sagas;
