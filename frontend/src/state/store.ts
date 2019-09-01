import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from './ducks';
import rootSaga from './middleware/saga';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}
declare var window: Window;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...reducers,
  });
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
