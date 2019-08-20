import { takeEvery, call, put } from 'redux-saga/effects';
import {
  default as actions,
  SearchGroupAction,
  SearchGroupEventsAction
} from './actions';
import {
  GroupApi,
  Group,
  Event,
  SearchGroupsRequest,
  SearchGroupEventsByIdRequest
} from 'typescript-fetch-api';
import { ActionTypes } from './types';

let api = new GroupApi();

const searchGroups = (req: SearchGroupsRequest): Promise<Group[]> => {
  return api
    .searchGroups(req)
    .then(groups => groups)
    .catch(error => {
      throw new Error(error);
    });
};

const searchGroupEventsById = (
  req: SearchGroupEventsByIdRequest
): Promise<Event[]> => {
  return api
    .searchGroupEventsById(req)
    .then(events => events)
    .catch(error => {
      throw new Error(error);
    });
};

function* searchGroup(action: SearchGroupAction) {
  try {
    // TODO: 検索条件のformatをどうする？
    const groups = yield call(searchGroups, {
      query: `groupId:${action.groupId}`
    });
    yield put(actions.searchGroup.searchSuccessGroup(groups[0]));
  } catch (error) {
    yield put(actions.searchGroup.searchErrorGroup(error));
  }
}

function* searchGroupEvents(action: SearchGroupEventsAction) {
  try {
    const events = yield call(searchGroupEventsById, {
      groupId: parseInt(action.groupId, 10)
    });
    yield put(actions.searchGroupEvents.searchSuccessGroupEvents(events));
  } catch (error) {
    yield put(actions.searchGroupEvents.searchErrorGroupEvents(error));
  }
}

function* searchRecentlyAddedGroup() {
  try {
    const groups = yield call(searchGroups, { perPage: 5 });
    yield put(
      actions.searchRecentlyAddedGroup.searchSuccessRecentlyAddedGroup(groups)
    );
  } catch (error) {
    yield put(
      actions.searchRecentlyAddedGroup.searchErrorRecentlyAddedGroup(error)
    );
  }
}

const sagas = [
  takeEvery(ActionTypes.REQUEST_GROUP, searchGroup),
  takeEvery(ActionTypes.REQUEST_GROUP_EVENTS, searchGroupEvents),
  takeEvery(ActionTypes.REQUEST_NEWLY_GROUP, searchRecentlyAddedGroup)
];
export default sagas;
