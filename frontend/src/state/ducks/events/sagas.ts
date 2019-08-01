import { takeEvery, call, put } from 'redux-saga/effects';
import actions from './actions';
import { EventApi, SearchEventsRequest } from 'typescript-fetch-api';
import { ActionTypes } from './types';
import moment from 'moment';

let api = new EventApi();

function* searchRecentlyAddedEvent() {
  const searchEvents = (req: SearchEventsRequest) => {
    return api
      .searchEvents(req)
      .then(events => events)
      .catch(error => {
        throw new Error(error.message);
      });
  };
  try {
    const events = yield call(searchEvents, { perPage: 5 });
    yield put(actions.searchSuccessRecentlyAddedEvent(events));
  } catch (error) {
    yield put(actions.searchErrorRecentlyAddedEvent(error));
  }
}

function* searchRecentlyFinishedEvent() {
  const searchEvents = (req: SearchEventsRequest) => {
    return api
      .searchEvents(req)
      .then(events => events)
      .catch(error => {
        throw new Error(error.message);
      });
  };
  try {
    const events = yield call(searchEvents, {
      // TODO: 検索条件のformatをどうする？
      // 開催が終了していて、現在ログインしているユーザーが参加したイベントを表示
      query: `holdEndDate>${moment(new Date()).format('YYYY-MM-DD-hh-mm-ss')}`,
      perPage: 5
    });
    yield put(actions.searchSuccessRecentlyFinishedEvent(events));
  } catch (error) {
    yield put(actions.searchErrorRecentlyFinishedEvent(error));
  }
}

const sagas = [
  takeEvery(ActionTypes.REQUEST_NEWLY_EVENT, searchRecentlyAddedEvent),
  takeEvery(ActionTypes.REQUEST_FINISHED_EVENT, searchRecentlyFinishedEvent)
];

export default sagas;
