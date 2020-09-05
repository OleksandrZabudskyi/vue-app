<template>
  <v-row>
    <v-row class="result-bar" align="center" justify="space-around">
      <v-col cols="8" sm="6" lg="4">
        <template v-if="moviesFound && !movie">
          {{ movies.length }} movie found
        </template>
        <template v-if="movie"> Films by {{ movie.genre }} genre</template>
      </v-col>
      <v-col cols="4" sm="6" lg="4">
        <v-row align="center">
          <div class="result-bar__sort">
            SORT BY
          </div>
          <button-group
            left-button-name="RELEASE DATE"
            right-button-name="RATING"
          ></button-group>
        </v-row>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="card-list">
      <template v-if="moviesFound">
        <v-col v-for="movie in movies" :key="movie.id" cols="12" sm="6" lg="4">
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
import { SEARCH_SUBMITTED } from "../EventBus";
import { store, mutations } from "../store/store";

export default {
  name: "MovieSearchResult",
  components: { ButtonGroup, MovieCard },

  data: () => ({
    moviesFound: true,
    movie: ""
  }),
  computed: {
    movies() {
      let movie = store.data[0];
      store.data[0].id = 0;
      for (let i = 1; i < 9; i++) {
        movie.id = i;
        mutations.setData(movie);
      }
      return store.data;
    }
  },
  created() {
    this.$bus.$on(SEARCH_SUBMITTED, this.findMovies);
  },
  methods: {
    findMovies(value) {
      let movie = this.movies.find(m => m.producer === value);
      if (!value || !movie) {
        this.moviesFound = false;
        this.movie = "";
      } else {
        this.moviesFound = true;
        this.movie = movie;
      }
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
