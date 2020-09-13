import data from "../../assets/movies.json";

export default {
  namespaced: true,

  state: {
    initMovies: data,
    movies: data,
    searchCriteria: "TITLE",
    sortCriteria: "RELEASE DATE"
  },
  getters: {
    getMovieById: state => id => {
      return state.initMovies.find(movie => movie.id === id);
    },
    searchMoviesByTitleOrOverview: state => value => {
      let caseInsensitiveValue = value.toLowerCase();
      let result = [];

      if (value) {
        result = state.initMovies.filter(
          movie =>
            movie.title.toLowerCase().includes(caseInsensitiveValue) ||
            movie.overview.toLowerCase().includes(caseInsensitiveValue)
        );
      }
      return result;
    },
    searchMoviesByGenre: state => value => {
      return state.initMovies.filter(movie =>
        movie.genres.some(genre => value.includes(genre))
      );
    }
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
    }
  },
  actions: {
    search(context, value) {
      if (context.state.searchCriteria === "GENRE") {
        context.commit(
          "updateMovies",
          context.getters.searchMoviesByGenre(value)
        );
      } else {
        context.commit(
          "updateMovies",
          context.getters.searchMoviesByTitleOrOverview(value)
        );
      }
    },
    searchByGenres(context, value) {
      context.commit(
        "updateMovies",
        context.getters.searchMoviesByGenre(value)
      );
    }
  }
};
