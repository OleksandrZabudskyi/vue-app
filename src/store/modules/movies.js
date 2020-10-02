import ApiService from "../../core/api";

export default {
  namespaced: true,

  state: {
    movies: [],
    searchCriteria: "TITLE",
    sortCriteria: "RELEASE DATE",
    selectedMovie: ""
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
    selectMovie(state, movie) {
      state.selectedMovie = movie;
    }
  },
  actions: {
    populateMovies({ commit }) {
      return ApiService.getMovies({
        sortBy: this.state.sortCriteria === "GENRE" ? "genre" : "release_date",
        sortOrder: "desc"
      }).then(movies => commit("updateMovies", movies.data));
    },
    search(context, value) {
      return ApiService.getMovies({
        searchBy: context.state.searchCriteria === "GENRE" ? "genres" : "title",
        search: value,
        sortBy: this.state.sortCriteria === "GENRE" ? "genre" : "release_date",
        sortOrder: "desc"
      }).then(movies => context.commit("updateMovies", movies.data));
    },
    searchByGenres(context, value) {
      return ApiService.getMovies({
        searchBy: "genres",
        search: value,
        sortBy: this.state.sortCriteria === "GENRE" ? "genre" : "release_date",
        sortOrder: "desc"
      }).then(movies => context.commit("updateMovies", movies.data));
    },
    searchMovieById(context, id) {
      return ApiService.getMoviesById(id).then(movie =>
        context.commit("selectMovie", movie.data)
      );
    }
  }
};
