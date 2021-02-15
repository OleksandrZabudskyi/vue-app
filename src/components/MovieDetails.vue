<template>
  <v-container>
    <v-row class="movie-details">
      <v-col cols="12" sm="6" lg="4">
        <v-img class="movie-details__img" :src="movie.poster_path"></v-img>
      </v-col>
      <v-col class="movie-details__card" cols="12" sm="6" lg="6">
        <v-row align="center">
          <v-col cols="10">
            <div class="headline movie-details__card__title">
              <h2>{{ movie.title }}</h2>
            </div>
          </v-col>
          <v-col cols="auto">
            <v-responsive
              class="text-center v-btn--outlined rounded-circle align-center movie-details__card__rating"
            >
              <div class="movie-details__card__rating--green">
                {{ movie.vote_average }}
              </div>
            </v-responsive>
          </v-col>
        </v-row>
        <div class="movie-details__card__subtitle">
          <p>{{ movie.genres | convertToString }}</p>
        </div>
        <v-row class="movie-details__card__release">
          <v-col cols="4">
            <p>{{ movie.release_date | formatDateToYear }}</p>
          </v-col>
          <v-col cols="8">
            <p>{{ movie.runtime | formatDuration }}</p>
          </v-col>
        </v-row>
        <div class="movie-details__card__description">
          <p>{{ movie.overview }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { formatDuration } from "../filters/formatDuration";
import { formatDateToYear } from "../filters/formatDateToYear";

export default {
  name: "MovieDetails",
  props: {
    movie: {
      type: Object
    }
  },
  filters: {
    formatDuration,
    formatDateToYear
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
