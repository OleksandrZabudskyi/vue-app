<template>
  <v-container>
    <v-row class="movie-details">
      <v-col cols="12" sm="6" lg="4">
        <v-img class="movie-details__img" :src="movie.poster"></v-img>
      </v-col>
      <v-col cols="12" sm="6" lg="6">
        <v-row align="center">
          <v-col>
            <div class="headline movie-details__card__title">
              <h1>{{ movie.title }}</h1>
            </div>
          </v-col>
          <v-col>
            <v-responsive
              class="text-center v-btn--outlined rounded-circle align-center movie-details__card__rating"
            >
              <div class="movie-details__card__rating--green">
                {{ movie.rating }}
              </div>
            </v-responsive>
          </v-col>
        </v-row>
        <div class="movie-details__card__subtitle">
          <p>{{ movie.genre }}</p>
        </div>
        <v-row class="movie-details__card__release">
          <v-col cols="2">
            <p>{{ movie.releaseYear }}</p>
          </v-col>
          <v-col cols="8">
            <p>{{ movie.duration }}min</p>
          </v-col>
        </v-row>
        <div class="movie-details__card__description">
          <p>{{ movie.description }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MovieDetails",
  props: {
    movie: {
      type: Object
    }
  }
};
</script>

<style>
.movie-details {
  background: #232323;
}

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
