import axios from "axios";

const ApiService = {
  init() {
    axios.defaults.baseURL = "http://react-cdp-api.herokuapp.com/";
  },
  getMovies(params) {
    return axios.get("movies", { params: params }).then(result => result.data);
  },
  getMoviesById(id) {
    return axios.get("movies" + `/${id}`);
  }
};

export default ApiService;
