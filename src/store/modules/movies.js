import data from "../../assets/movies.json";

export default {
  namespaced: true,

  state: {
    movies: data
  },
  getters: {
    getMovieById: state => id => {
      return state.movies.find(movie => movie.id === id);
    }
  }
};
