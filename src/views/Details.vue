<template>
  <v-app>
    <v-main>
      <Header selected-component="movieDetails" />
      <movie-search-result></movie-search-result>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieSearchResult from "../components/MovieSearchResult";

export default {
  name: "App",

  components: {
    MovieSearchResult,
    Footer,
    Header
  }
};
</script>
