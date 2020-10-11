import ApiService from "../../core/api";

export default {
  namespaced: true,

  state: {
    movies: [],
    searchCriteria: "TITLE",
    sortCriteria: "RELEASE DATE",
    isLoading: true
  },
  mutations: {
    saveSearchCriteria(state, value) {
      state.searchCriteria = value;
    },
    saveSortCriteria(state, value) {
      state.sortCriteria = value;
    },
    updateMovies(state, movies) {
      state.movies = movies;
    },
    updateIsLoading(state, value) {
      state.isLoading = value;
    }
  },
  actions: {
    search(context, query) {
      return ApiService.getMovies(query)
        .then(movies => context.commit("updateMovies", movies.data))
        .finally(() => context.commit("updateIsLoading", false));
    }
  }
};
