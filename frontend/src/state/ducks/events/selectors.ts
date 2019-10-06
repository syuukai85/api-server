import { createSelector } from 'reselect';
import { matchPath } from 'react-router';

interface State {
  router: {
    location: {
      pathname: string;
    };
  };
}

interface Param {
  id: string;
}

/**
 * 渡された情報からrouterをselectする関数
 *
 * @param {State} state state情報
 */
const routerSelector = (state: State) => state.router;

/**
 * 渡された情報からevent idをselectする関数
 *
 * @param {Router} state state情報
 */
const getEventIdFromRouter = createSelector(
  routerSelector,
  state => {
    const match = matchPath<Param>(state.location.pathname, {
      path: '/events/:id',
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

export { getEventIdFromRouter };
