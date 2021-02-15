import axios from "axios";

const ApiService = {
  init() {
    axios.defaults.baseURL = "http://react-cdp-api.herokuapp.com/";
  },
  getMovies(params) {
    return axios.get("movies", { params: params }).then(response => {
      console.log(response);
      return response.data;
    });
  },
  getMoviesById(id) {
    return axios.get("movies" + `/${id}`).then(response => {
      console.log(response);
      return response;
    });
  }
};

export default ApiService;
