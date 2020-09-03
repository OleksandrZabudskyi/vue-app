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
          <v-btn class="search-bar__button" text x-large :click="submit">
            SEARCH
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <div class="search-bar__filter">
      <p>SEARCH BY</p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "SearchBar",
  data: () => ({
    searchText: "Search"
  }),
  methods: {
    submit() {
      this.$emit("submitted", this.searchText);
    }
  }
};
</script>

<style scoped>
.search-bar {
  background-color: #232323;
  color: white;
  opacity: 0.8;
}

.search-bar__header {
  padding-left: 20px;
  padding-bottom: 20px;
  font-size: 15px;
}

.search-bar__filter {
  padding-left: 20px;
  font-size: 20px;
}

.search-bar__input {
  color: #ffffff;
}

.search-bar__button {
  background-color: #f65261;
  color: #ffffff;
}
</style>
