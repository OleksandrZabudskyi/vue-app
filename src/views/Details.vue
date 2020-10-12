<template>
  <v-app>
    <v-main>
      <div class="header">
        <v-row>
          <v-col cols="12">
            <Header :isMovieDetails="isMovieDetails"></Header>
          </v-col>
          <v-row align="center" justify="center">
            <v-col cols="10">
              <movie-details :movie="selectedMovie"></movie-details>
            </v-col>
          </v-row>
        </v-row>
      </div>
      <movie-search-result
        :selected-movie="selectedMovie"
      ></movie-search-result>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import MovieDetails from "../components/MovieDetails";
import Header from "../components/Header";
import MovieSearchResult from "../components/MovieSearchResult";
import Footer from "../components/Footer";
import ApiService from "../core/api";
import { MOVIE_SELECTED } from "../EventBus";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    MovieSearchResult,
    Footer,
    MovieDetails
  },
  data: () => ({
    selectedMovie: null,
    isMovieDetails: true
  }),
  computed: {
    ...mapState("movies", ["movies"])
  },
  created() {
    this.$bus.$on(MOVIE_SELECTED, this.addSelectedMovie);
  },
  mounted() {
    ApiService.getMoviesById(this.$route.params.id).then(response => {
      let selectedMovie = response.data;
      this.selectedMovie = selectedMovie;
      this.$store.dispatch(
        "movies/search",
        this.createSearchQuery(selectedMovie.genres[0])
      );
    });
  },
  methods: {
    addSelectedMovie(value) {
      this.selectedMovie = value;
    },
    createSearchQuery(value) {
      return {
        searchBy: "genres",
        search: value,
        sortBy:
          this.sortCriteria === "RATING" ? "vote_average" : "release_date",
        sortOrder: "desc"
      };
    }
  }
};
</script>

<style scoped>
.header {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../../public/movies.jpg");
}
</style>
