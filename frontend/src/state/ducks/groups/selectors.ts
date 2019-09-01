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

/**
 * 渡された情報からrouterをselectする関数
 *
 * @param {State} state state情報
 */
const routerSelector = (state: State): Router => state.router;

/**
 * 渡された情報からgroup idをselectする関数
 *
 * @param {Router} state state情報
 */
const getGroupIdFromRouter = createSelector(
  routerSelector,
  (state: Router): string => {
    const match = matchPath<Param>(state.location.pathname, {
      path: '/groups/:id',
      exact: true,
      strict: true,
    });
    const id = match === null || match.params === null || match.params.id === null ? '' : match.params.id;
    return id;
  }
);

export { getGroupIdFromRouter };
