<template>
  <v-row>
    <v-row class="result-bar" align="center" justify="space-around">
      <v-col cols="8" sm="6" lg="4">
        <template v-if="movies.length && !selectedMovie && searchValue">
          {{ movies.length }} movie found
        </template>
        <template v-if="selectedMovie">
          Films by {{ selectedMovie.genres[0] }} genre</template
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
      <div class="spinner"></div>

      <template v-if="isLoading">
        <progress-bar entityName="movies"></progress-bar>
      </template>
      <template v-else-if="movies.length">
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
import { mapState } from "vuex";
import ProgressBar from "../components/ProgressBar";
import { SEARCH_SUBMITTED, HOME_PAGE_APPLIED } from "../EventBus";

export default {
  name: "MovieSearchResult",
  components: { ProgressBar, ButtonGroup, MovieCard },
  props: {
    selectedMovie: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    searchValue: ""
  }),
  computed: {
    ...mapState("movies", [
      "movies",
      "searchCriteria",
      "sortCriteria",
      "isLoading"
    ])
  },
  created() {
    this.$bus.$on(SEARCH_SUBMITTED, this.addSearchValue);
    this.$bus.$on(HOME_PAGE_APPLIED, this.cleanResult);
  },
  methods: {
    sortMovies(movies) {
      if (this.sortCriteria === "RATING") {
        return movies.slice().sort((a, b) => b.vote_average - a.vote_average);
      } else if (this.sortCriteria === "RELEASE DATE") {
        return movies
          .slice()
          .sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      }
    },

    addSearchValue(value) {
      this.searchValue = value;
      this.selectedMovie = "";
    },
    cleanResult() {
      this.searchValue = "";
      this.selectedMovie = "";
    }
  }
};
</script>

<style scoped>
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
