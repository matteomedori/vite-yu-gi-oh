<script>
import AppSelect from "./AppSelect.vue";
import AppCards from "./AppCards.vue";
import AppFounded from "./AppFounded.vue";
import axios from "axios";
import { store } from "../store";

export default {
  name: "AppMain",
  components: {
    AppSelect,
    AppCards,
    AppFounded,
  },
  data() {
    return {
      store,
      apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0",
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
      <div class="container-cards">
        <AppFounded />
        <AppCards />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use "../assets/scss/partials/variables" as *;

main {
  background-color: $main-bg;

  .container-cards {
    background-color: white;
    padding: 45px 45px 10px 45px;
  }
}
</style>
