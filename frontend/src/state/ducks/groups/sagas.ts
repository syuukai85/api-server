import { takeEvery, call, put } from 'redux-saga/effects';
import actions from './actions';
import { GroupApi, SearchGroupsRequest } from 'typescript-fetch-api';
import { ActionTypes } from './types';

let api = new GroupApi();

function* searchRecentlyAddedGroup() {
  const searchGroups = (req: SearchGroupsRequest) => {
    return api
      .searchGroups(req)
      .then(groups => groups)
      .catch(error => {
        throw new Error(error);
      });
  };
  try {
    const groups = yield call(searchGroups, { perPage: 5 });
    yield put(actions.searchSuccessRecentlyAddedGroup(groups));
  } catch (error) {
    yield put(actions.searchErrorRecentlyAddedGroup(error));
  }
}

const sagas = [
  takeEvery(ActionTypes.REQUEST_NEWLY_GROUP, searchRecentlyAddedGroup)
];
export default sagas;
