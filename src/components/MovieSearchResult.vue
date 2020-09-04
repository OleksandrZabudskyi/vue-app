<template>
  <v-container fluid>
    <v-row>
      <v-row class="result-bar" align="center" justify="space-around">
        <v-col v-if="movies.length && movies.length > 0" cols="8" sm="6" lg="4">
          {{ movies.length }} movie found
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
      <v-row class="card-list">
        <v-col v-for="movie in movies" :key="movie.id" cols="12" sm="6" lg="4">
          <movie-card :movie="movie"></movie-card>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import MovieCard from "./MovieCard";
import ButtonGroup from "./ButtonGroup";

export default {
  name: "MovieSearchResult",
  components: { ButtonGroup, MovieCard },
  computed: {
    movies: function() {
      let movies = [];
      let movie = {
        id: "",
        poster: "/poster.png",
        title: "Four rooms",
        genre: "Action and Adventure",
        rating: 4.3,
        duration: 140,
        releaseYear: 2014,
        description:
          "This movie features the collaborative directorial efforts of four\n" +
          "            new filmmakers, each of whom directs a segment of this comedy. It's New Year's Eve at the Mon Signor\n" +
          "            Hotel, a former grand old Hollywood hotel, now fallen upon hard times. Often using physical comedy and\n" +
          "            sight gags, this movie chronicles the slapstick misadventures of Ted, the Bellhop."
      };

      for (let i = 0; i < 9; i++) {
        movie.id = i;
        movies.push(movie);
      }
      return movies;
    }
  }
};
</script>

<style>
.result-bar {
  background-color: #555555;
  width: 100%;
}

.card-list {
  padding: 40px;
  background-color: #232323;
}

.result-bar__sort {
  padding-right: 10px;
  font-size: 20px;
}
</style>
