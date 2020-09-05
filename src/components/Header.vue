<template>
  <div class="header">
    <v-row>
      <v-col cols="12">
        <v-row class="header__logo" align="center" justify="space-between">
          <div><strong>NETFLIX</strong>Roulett</div>
          <template v-if="isMovieDetails">
            <v-btn @click="selectSearchBarComponent()" color="red" icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-row>
      </v-col>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <keep-alive>
            <component
              :is="selectedComponent"
              v-bind="currentProperties"
            ></component>
          </keep-alive>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import MovieDetails from "./MovieDetails";
import { SEARCH_SUBMITTED } from "../EventBus";
import { store } from "../store/store";

export default {
  name: "Header",
  components: { movieDetails: MovieDetails, searchBar: SearchBar },
  data: () => ({
    selectedComponent: "searchBar"
  }),
  computed: {
    movie() {
      return store.data[0];
    },
    isSearchBar() {
      return this.selectedComponent === "searchBar";
    },

    isMovieDetails() {
      return this.selectedComponent === "movieDetails";
    },
    currentProperties() {
      if (this.selectedComponent === "movieDetails") {
        return { movie: this.movie };
      }
      return {};
    }
  },
  created() {
    this.$bus.$on(SEARCH_SUBMITTED, this.selectMovieBarComponent);
  },
  methods: {
    selectSearchBarComponent() {
      this.selectedComponent = "searchBar";
    },
    selectMovieBarComponent(value) {
      if (value && this.movie.producer === value)
        this.selectedComponent = "movieDetails";
    }
  }
};
</script>

<style>
.header {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../../public/movies.jpg");
}

.header__logo {
  padding-left: 30px;
  padding-right: 30px;
  color: #f65261;
  font-size: 15px;
}
</style>
