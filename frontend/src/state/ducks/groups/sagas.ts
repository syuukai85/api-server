import { takeEvery, call, put } from 'redux-saga/effects';
import { default as actions, SearchGroupAction } from './actions';
import { GroupApi, SearchGroupsRequest } from 'typescript-fetch-api';
import { ActionTypes } from './types';

let api = new GroupApi();

const searchGroups = (req: SearchGroupsRequest) => {
  return api
    .searchGroups(req)
    .then(groups => groups)
    .catch(error => {
      throw new Error(error);
    });
};

function* searchGroup(action: SearchGroupAction) {
  try {
    // TODO: 検索条件のformatをどうする？
    const group = yield call(searchGroups, {
      query: `groupId:${action.groupId}`
    });
    yield put(actions.searchGroup.searchSuccessGroup(group));
  } catch (error) {
    yield put(actions.searchGroup.searchErrorGroup(error));
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
  takeEvery(ActionTypes.REQUEST_NEWLY_GROUP, searchRecentlyAddedGroup)
];
export default sagas;
