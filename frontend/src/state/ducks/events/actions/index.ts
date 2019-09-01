import { default as searchEvent, SearchEventAction } from './searchEvent';
import { default as addEvent, AddEventAction } from './addEvent';
import { default as searchRecentlyAddedEvent, RecentlyAddedEventAction } from './searchRecentlyAddedEvent';
import { default as searchRecentlyFinishedEvent, RecentlyFinishedEventAction } from './searchRecentlyFinishedEvent';
export type SearchEventAction = SearchEventAction;
export type AddEventAction = AddEventAction;
export type RecentlyAddedEventAction = RecentlyAddedEventAction;
export type RecentlyFinishedEventAction = RecentlyFinishedEventAction;

export default {
  addEvent,
  searchEvent,
  searchRecentlyAddedEvent,
  searchRecentlyFinishedEvent,
};
