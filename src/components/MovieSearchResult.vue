<template>
  <v-row>
    <v-row class="result-bar" align="center" justify="space-around">
      <v-col cols="8" sm="6" lg="4">
        <template v-if="movies.length && !selectedMovie && searchValue">
          {{ movies.length }} movie found
        </template>
        <template v-if="selectedMovie">
          Films by {{ convertToString(selectedMovie.genres) }} genre</template
        >
      </v-col>
      <v-col cols="4" sm="6" lg="4">
        <v-row align="center">
          <div class="result-bar__sort">
            SORT BY
          </div>
          <button-group
            groupName="sort"
            left-button-name="RELEASE DATE"
            right-button-name="RATING"
          ></button-group>
        </v-row>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="card-list">
      <template v-if="movies.length">
        <v-col
          v-for="movie in sortMovies(movies)"
          :key="movie.id"
          cols="12"
          sm="6"
          lg="4"
        >
          <movie-card :movie="movie"></movie-card>
        </v-col>
      </template>
      <template v-else>
        <div class="card-list--empty">
          <p>No films found</p>
        </div>
      </template>
    </v-row>
  </v-row>
</template>

<script>
import MovieCard from "./MovieCard";
import ButtonGroup from "./ButtonGroup";
import {
  MOVIE_SELECTED,
  SEARCH_SUBMITTED,
  HOME_PAGE_APPLIED
} from "../EventBus";
import { mapState } from "vuex";

export default {
  name: "MovieSearchResult",
  components: { ButtonGroup, MovieCard },

  data: () => ({
    searchValue: "",
    selectedMovie: ""
  }),
  computed: {
    ...mapState("movies", ["movies", "searchCriteria", "sortCriteria"])
  },
  created() {
    this.$bus.$on(MOVIE_SELECTED, this.addSelectedMovie);
    this.$bus.$on(SEARCH_SUBMITTED, this.addSearchValue);
    this.$bus.$on(HOME_PAGE_APPLIED, this.cleanResult);
  },
  methods: {
    sortMovies(movies) {
      if (this.sortCriteria === "RATING") {
        return movies.slice().sort((a, b) => b.vote_count - a.vote_count);
      } else if (this.sortCriteria === "RELEASE DATE") {
        return movies.slice().sort((a, b) => b.release_date - a.release_date);
      }
    },

    addSelectedMovie(value) {
      this.selectedMovie = value;
      this.searchValue = "";
      this.$store.dispatch("movies/searchByGenres", this.selectedMovie.genres);
    },

    addSearchValue(value) {
      this.searchValue = value;
      this.selectedMovie = "";
      this.$store.dispatch("movies/search", value);
    },
    convertToString(array) {
      return array.filter(item => !!item).join(", ");
    },
    cleanResult() {
      this.searchValue = "";
      this.selectedMovie = "";
    }
  }
};
</script>

<style>
.result-bar {
  background-color: #555555;
  width: 100%;
  font-size: 0.875rem;
  color: #ffffff;
}

.card-list {
  padding: 40px;
  background-color: #232323;
  min-height: 500px;
}

.result-bar__sort {
  padding-right: 10px;
  font-size: 0.875rem;
  color: #ffffff;
}

.card-list--empty {
  font-size: 70px;
  color: #ffffff;
}
</style>
