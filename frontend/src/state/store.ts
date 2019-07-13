import { createStore, combineReducers } from 'redux';
import * as reducers from './ducks';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

export const history = createBrowserHistory();

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}
declare var window: Window;

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...reducers
  });
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}