<template>
  <div class="movie-card">
    <router-link :to="`/movies/${movie.id}`">
      <v-img
        class="movie-card__img"
        :src="urlPath"
        v-isInViewPort="movie.poster_path"
        @intersects="addUrlPath($event)"
        @click.prevent="selectMovie()"
        @click.native="scrollToTop()"
      ></v-img>
    </router-link>
    <div>
      <v-row align="center" justify="space-between">
        <v-col cols="8">
          <div class="movie-card__title">
            <h3>{{ movie.title }}</h3>
          </div>
        </v-col>
        <v-col cols="2">
          <v-responsive
            class="text-center v-btn--outlined rounded align-center movie-card__release"
          >
            <span>{{ movie.release_date }}</span>
          </v-responsive>
        </v-col>
      </v-row>
    </div>
    <div class="movie-card__subtitle">
      <p>{{ movie.genres | convertToString }}</p>
    </div>
  </div>
</template>

<script>
import { MOVIE_SELECTED } from "../EventBus";
import { mapState } from "vuex";

export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    urlPath: ""
  }),
  computed: {
    ...mapState("movies", ["movies"])
  },
  methods: {
    selectMovie() {
      this.$bus.$emit(MOVIE_SELECTED, this.movie);
      this.$router.push({ path: `/movies/${this.movie.id}` });
      this.$store.dispatch(
        "movies/search",
        this.createSearchQuery(this.movie.genres[0])
      );
    },
    addUrlPath(event) {
      this.urlPath = event.detail;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
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
.movie-card {
  width: 360px;
  color: #ffffff;
}

.movie-card__img {
  height: 500px;
}

.movie-card__release {
  font-size: 12px;
}

.movie-card__subtitle {
  color: #555555;
}
</style>
