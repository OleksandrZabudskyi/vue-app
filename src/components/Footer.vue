<template>
  <div class="footer">
    <v-footer class="footer--grey">
      <v-col class="text-center" cols="12">
        <div class="footer__logo"><strong>NETFLIX</strong>Roulett</div>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer--grey {
  background-color: #555555;
}

.footer__logo {
  color: #f65261;
  font-size: 15px;
}
</style>
