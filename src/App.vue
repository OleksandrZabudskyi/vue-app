<template>
  <v-app>
    <v-content>
      <Header/>
      <v-main>
      </v-main>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
  name: "App",

  components: {
    Footer,
    Header
  }
};
</script>
