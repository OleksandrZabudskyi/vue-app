<template>
  <v-app>
    <v-main>
      <Header />
      <movie-search-result></movie-search-result>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieSearchResult from "./components/MovieSearchResult";

export default {
  name: "App",

  components: {
    MovieSearchResult,
    Footer,
    Header
  },

  data: () => ({
    movie: {
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
    }
  })
};
</script>
