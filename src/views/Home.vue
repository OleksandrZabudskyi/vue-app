<template>
  <v-app>
    <v-main>
      <div class="header">
        <v-row>
          <v-col cols="12">
            <Header></Header>
          </v-col>
          <v-row align="center" justify="center">
            <v-col cols="10">
              <search-bar></search-bar>
            </v-col>
          </v-row>
        </v-row>
      </div>
      <movie-search-result></movie-search-result>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import MovieSearchResult from "../components/MovieSearchResult";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    MovieSearchResult,
    Footer,
    SearchBar
  },
  mounted() {
    this.$store.dispatch("movies/search", this.$route.query);
  }
};
</script>

<style scoped>
.header {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../../public/movies.jpg");
}
</style>
