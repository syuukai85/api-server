import { default as searchGroup, SearchGroupAction } from './searchGroup';
import {
  default as searchRecentlyAddedGroup,
  SearchRecentlyAddedGroupAction
} from './searchRecentlyAddedGroup';
export type SearchGroupAction = SearchGroupAction;
export type SearchRecentlyAddedGroupAction = SearchRecentlyAddedGroupAction;

export default {
  searchGroup,
  searchRecentlyAddedGroup
};
