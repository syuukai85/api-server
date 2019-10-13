import { takeEvery, call, put } from 'redux-saga/effects';
import {
  default as actions,
  SearchEventAction,
  AddEventAction
} from './actions';
import {
  EventApi,
  Event,
  SearchEventsRequest,
  AddEventRequest
} from 'typescript-fetch-api';
import { ActionTypes } from './types';
import moment from 'moment';

let api = new EventApi();

/**
 * イベント検索を実行
 *
 * @param {SearchEventsRequest} req イベント検索時のリクエスト
 *
 * @returns {Promise<Event[]>} 実行時のPromiseオブジェクト
 */
const searchEventsRequest = (req: SearchEventsRequest): Promise<Event[]> => {
  return api
    .searchEvents(req)
    .then(events => events)
    .catch(error => {
      throw new Error(error.message);
    });
};

/**
 * イベント追加を実行
 *
 * @param {SearchEventsRequest} req イベント追加時のリクエスト
 */
const addEventRequest = (req: AddEventRequest): Promise<Event> => {
  return api
    .addEvent(req)
    .then(events => events)
    .catch(error => {
      throw new Error(error.message);
    });
};

/**
 * イベント検索時の処理をまとめたsagaの処理
 *
 * @param {SearchEventAction} action イベント検索時のaction
 */
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

/**
 * イベント追加時の処理をまとめたsagaの処理
 *
 * @param {AddEventAction} action イベント追加時のaction
 */
function* addEvent(action: AddEventAction) {
  try {
    // TODO: Eventのkeyが先頭大文字になってるがために記述が冗長。swagger側の修正必須
    const event = yield call(addEventRequest, { Event: action.event });
    yield put(actions.addEvent.addSuccessEvent(event.id));
  } catch (error) {
    yield put(actions.addEvent.addErrorEvent(error));
  }
}

/**
 * 最近追加されたグループ検索時の処理をまとめたsagaの処理
 */
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

/**
 * 最近終了したグループ検索時の処理をまとめたsagaの処理
 */
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
