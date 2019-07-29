import { all } from 'redux-saga/effects';
import eventSagas from '../../ducks/events/sagas';

export default function* rootSaga() {
  yield all([...eventSagas]);
}
