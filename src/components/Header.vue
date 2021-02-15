<template>
  <v-row class="header__logo" align="center" justify="space-between">
    <div><strong>NETFLIX</strong>Roulett</div>
    <template v-if="isMovieDetails">
      <router-link to="/">
        <v-btn @click="selectSearchBarComponent()" color="red" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </router-link>
    </template>
  </v-row>
</template>

<script>
import { HOME_PAGE_APPLIED } from "../EventBus";

export default {
  name: "Header",
  props: {
    isMovieDetails: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectSearchBarComponent() {
      this.$bus.$emit(HOME_PAGE_APPLIED);
    }
  }
};
</script>

<style scoped>
.header__logo {
  padding-left: 30px;
  padding-right: 30px;
  color: #f65261;
  font-size: 15px;
}
.v-application a {
  text-decoration: none;
}
</style>
