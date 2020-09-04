<template>
  <div class="header">
    <v-toolbar :src="headerBackGround">
      <v-toolbar-title>
        <div class="header__logo"><strong>NETFLIX</strong>Roulett</div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="white" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    headerBackGround: "/movies.jpg"
  })
};
</script>

<style>
.header {
}

.header__logo {
  color: #f65261;
  font-size: 15px;
}
</style>
