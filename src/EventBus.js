import Vue from "vue";
const EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
  $bus: {
    get() {
      return EventBus;
    }
  }
});

export const SEARCH_SUBMITTED = "searchSubmitted";
export const MOVIE_SELECTED = "movieSelected";
export const HOME_PAGE_APPLIED = "homePageApplied";
export default EventBus;
