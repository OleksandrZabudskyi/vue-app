<template>
  <div>
    <v-btn-toggle
      v-model="selectedButtonValue"
      background-color="grey darken-1"
      mandatory
      :change="saveToggleValue()"
    >
      <v-btn color="white" text :value="leftButtonName">
        <span>{{ leftButtonName }}</span>
      </v-btn>
      <v-btn color="white" text :value="rightButtonName">
        <span>{{ rightButtonName }}</span>
      </v-btn>
    </v-btn-toggle>
  </div>
</template>
<script>
export default {
  name: "ButtonGroup",
  props: {
    groupName: {
      type: String,
      required: true
    },
    leftButtonName: {
      type: String,
      required: true,
      default: "TITLE"
    },
    rightButtonName: {
      type: String,
      required: true,
      default: "GENRE"
    }
  },
  data: () => ({
    selectedButtonValue: ""
  }),
  methods: {
    saveToggleValue() {
      if (this.groupName === "search") {
        this.$store.commit(
          "movies/saveSearchCriteria",
          this.selectedButtonValue
        );
      }
      if (this.groupName === "sort") {
        this.$store.commit("movies/saveSortCriteria", this.selectedButtonValue);
      }
    }
  }
};
</script>

<style scoped>
.v-item--active {
  background-color: #f65261;
  color: #ffffff;
}
</style>
