<template>
  <v-row class="fill-height" align-content="center" justify="center">
    <v-col class="text-lg-h5  text-center progress-bar-text__white" cols="12">
      Getting your {{ entityName }}
    </v-col>
    <v-col cols="6">
      <v-progress-linear
        color="deep-purple accent-4"
        indeterminate
        rounded
        height="6"
      ></v-progress-linear>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    entityName: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.progress-bar-text__white {
  color: #ffffff;
}
</style>
