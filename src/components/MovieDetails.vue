<template>
  <v-container>
    <v-row class="movie-details">
      <v-col cols="12" sm="6" lg="4">
        <v-img class="movie-details__img" :src="moviePosterPath"></v-img>
      </v-col>
      <v-col class="movie-details__card" cols="12" sm="6" lg="6">
        <v-row align="center">
          <v-col cols="10">
            <div class="headline movie-details__card__title">
              <h2>{{ movieTitle }}</h2>
            </div>
          </v-col>
          <v-col cols="auto">
            <v-responsive
              class="text-center v-btn--outlined rounded-circle align-center movie-details__card__rating"
            >
              <div class="movie-details__card__rating--green">
                {{ movieVoteCount }}
              </div>
            </v-responsive>
          </v-col>
        </v-row>
        <div class="movie-details__card__subtitle">
          <p>{{ convertToString(movieGenres) }}</p>
        </div>
        <v-row class="movie-details__card__release">
          <v-col cols="4">
            <p>{{ movieReleaseDate }}</p>
          </v-col>
          <v-col cols="8">
            <p>{{ movieDuration ? movieDuration + " min" : "0 min" }}</p>
          </v-col>
        </v-row>
        <div class="movie-details__card__description">
          <p>{{ movieOverview }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MovieDetails",
  props: {
    movie: {
      type: Object
    }
  },
  computed: {
    ...mapGetters("movies", ["getMovieById"]),

    moviePosterPath() {
      return this.getMovieById(this.movie.id).poster_path;
    },
    movieTitle() {
      return this.getMovieById(this.movie.id).title;
    },
    movieVoteCount() {
      return this.getMovieById(this.movie.id).vote_count;
    },
    movieGenres() {
      return this.getMovieById(this.movie.id).genres;
    },
    movieReleaseDate() {
      return this.getMovieById(this.movie.id).release_date;
    },
    movieDuration() {
      return this.getMovieById(this.movie.id).runtime;
    },
    movieOverview() {
      return this.getMovieById(this.movie.id).overview;
    }
  },
  methods: {
    convertToString: function(array) {
      return array.filter(item => !!item).join(", ");
    }
  }
};
</script>

<style>
.movie-details__img {
  height: 500px;
}

.movie-details__card__title,
.movie-details__card__description {
  color: #ffffff;
}

.movie-details__card__rating {
  height: 60px;
  width: 60px;
  color: #ffffff;
  font-size: 20px;
}

.movie-details__card__rating--green {
  color: #a1e66f;
}

.movie-details__card__subtitle {
  color: #555555;
}

.movie-details__card__release {
  color: #f65261;
  font-size: 20px;
}
</style>
