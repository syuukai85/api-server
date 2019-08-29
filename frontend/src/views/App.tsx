import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from '../state/store';
import LoginScene from './scenes/LoginScene';
import HomeScene from './scenes/HomeScene';
import EventDetailScene from './scenes/event/DetailScene';
import AddEventScene from './scenes/event/AddScene';
import GroupDetailScene from './scenes/group/DetailScene';
import AuthGroupContainer from './containers/auth/AuthGroupContainer';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/login" component={LoginScene} />
          <AuthGroupContainer>
            <Switch>
              <Route exact path="/" component={HomeScene} />
              <Route exact path="/event/add" component={AddEventScene} />
              <Route exact path="/events/:id" component={EventDetailScene} />
              <Route exact path="/groups/:id" component={GroupDetailScene} />
            </Switch>
          </AuthGroupContainer>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
