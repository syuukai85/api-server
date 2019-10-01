import { default as searchGroup, SearchGroupAction } from './searchGroup';
import {
  default as searchRecentlyAddedGroup,
  SearchRecentlyAddedGroupAction
} from './searchRecentlyAddedGroup';
import {
  default as searchGroupEvents,
  SearchGroupEventsAction
} from './searchGroupEvents';
export type SearchGroupAction = SearchGroupAction;
export type SearchRecentlyAddedGroupAction = SearchRecentlyAddedGroupAction;
export type SearchGroupEventsAction = SearchGroupEventsAction;

export default {
  searchGroup,
  searchGroupEvents,
  searchRecentlyAddedGroup
};
