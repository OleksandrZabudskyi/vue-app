<template>
  <div class="movie-card">
    <v-img class="movie-card__img" :src="movie.poster"></v-img>
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
            <span>{{ movie.releaseYear }}</span>
          </v-responsive>
        </v-col>
      </v-row>
    </div>
    <div class="movie-card__subtitle">
      <p>{{ movie.genre }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true
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