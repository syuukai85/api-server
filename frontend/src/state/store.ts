import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from './ducks';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...reducers
  });
  return createStore(rootReducer, initialState, applyMiddleware());
}
