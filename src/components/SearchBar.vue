<template>
  <v-container class="search-bar">
    <div class="search-bar__header">
      <h2>FIND YOUR MOVIE</h2>
    </div>
    <v-form>
      <v-row no-gutters>
        <v-col cols="10">
          <v-text-field
            v-model="searchText"
            class="mx-4 search-bar__input"
            dark
            outlined
            placeholder="Search"
            flat
          >
          </v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn
            class="search-bar__button"
            text
            x-large
            @click="submitSearch()"
          >
            SEARCH
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-row no-gutters class="search-bar__buttons" align="center">
      <div class="search-bar__buttons--filter">
        SEARCH BY
      </div>
      <button-group
        groupName="search"
        left-button-name="TITLE"
        right-button-name="GENRE"
      ></button-group>
    </v-row>
  </v-container>
</template>

<script>
import ButtonGroup from "./ButtonGroup";
import { SEARCH_SUBMITTED } from "../EventBus";
import { mapState } from "vuex";

export default {
  name: "SearchBar",
  components: { ButtonGroup },
  data: () => ({
    searchText: ""
  }),
  computed: {
    ...mapState("movies", ["movies", "searchCriteria", "sortCriteria"])
  },
  methods: {
    submitSearch() {
      let searchQuery = this.createSearchQuery();
      this.$bus.$emit(SEARCH_SUBMITTED, this.searchText);
      this.$router.push({
        name: "home",
        query: searchQuery
      });
      this.$store.dispatch("movies/search", searchQuery);
    },
    createSearchQuery() {
      return {
        searchBy: this.searchCriteria === "GENRE" ? "genres" : "title",
        search: this.searchText,
        sortBy:
          this.sortCriteria === "RATING" ? "vote_average" : "release_date",
        sortOrder: "desc"
      };
    }
  }
};
</script>

<style scoped>
.search-bar {
  color: white;
}

.search-bar__header {
  padding-left: 20px;
  padding-bottom: 20px;
  font-size: 15px;
}

.search-bar__buttons--filter {
  padding-left: 20px;
  font-size: 0.875rem;
  padding-right: 10px;
}

.search-bar__input {
  color: #ffffff;
}

.search-bar__button {
  background-color: #f65261;
  color: #ffffff;
}
</style>
