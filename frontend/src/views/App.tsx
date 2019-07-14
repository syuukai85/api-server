import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from '../state/store';
import LoginPage from './components/auth/LoginPage';
import HomePage from './components/home/HomePage';
import AuthGroupContainer from './containers/auth/AuthGroupContainer';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <AuthGroupContainer>
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </AuthGroupContainer>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
