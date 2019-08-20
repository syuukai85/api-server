import { createSelector } from 'reselect';
import { matchPath } from 'react-router';

interface Router {
  location: {
    pathname: string;
  };
}

interface State {
  router: Router;
}

interface Param {
  id: string;
}

const routerSelector = (state: State): Router => state.router;

const getGroupIdFromRouter = createSelector(
  routerSelector,
  state => {
    const match = matchPath<Param>(state.location.pathname, {
      path: '/groups/:id',
      exact: true,
      strict: true
    });
    const id =
      match === null || match.params === null || match.params.id === null
        ? ''
        : match.params.id;
    return id;
  }
);

export { getGroupIdFromRouter };
