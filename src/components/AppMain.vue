<script>
import AppSelect from "./AppSelect.vue";
import AppCards from "./AppCards.vue";
import axios from "axios";
import { store } from "../store";

export default {
  name: "AppMain",
  components: {
    AppSelect,
    AppCards,
  },
  data() {
    return {
      apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    };
  },
  created() {
    axios.get(this.apiURL).then((response) => {
      store.cards = response.data.data;
    });
  },
};
</script>

<template>
  <main>
    <div class="container">
      <AppSelect />
      <AppCards />
    </div>
  </main>
</template>

<style lang="scss">
@use "../assets/scss/partials/variables" as *;

main {
  background-color: $main-bg;
}
</style>
