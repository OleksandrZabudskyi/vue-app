<template>
  <div>
    <v-btn-toggle
      v-model="selectedButtonValue"
      background-color="grey darken-1"
      mandatory
    >
      <v-btn :click="submit()" color="white" text>
        <span>{{ leftButtonName }}</span>
      </v-btn>
      <v-btn :click="submit()" color="white" text>
        <span>{{ rightButtonName }}</span>
      </v-btn>
    </v-btn-toggle>
  </div>
</template>
<script>
export default {
  name: "ButtonGroup",
  props: {
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
    selectedButtonValue: 0
  }),
  methods: {
    submit() {
      this.$emit("submitted", this.selectedButtonValue);
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
