import { all } from 'redux-saga/effects';
import eventSagas from '../../ducks/events/sagas';
import groupSagas from '../../ducks/groups/sagas';

export default function* rootSaga() {
  yield all([...eventSagas, ...groupSagas]);
}
