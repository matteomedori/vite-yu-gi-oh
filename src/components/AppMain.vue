<script>
import AppSelect from "./AppSelect.vue";
import AppCards from "./AppCards.vue";
import AppFounded from "./AppFounded.vue";
import AppLoader from "./AppLoader.vue";
import axios from "axios";
import { store } from "../store";

export default {
  name: "AppMain",
  components: {
    AppSelect,
    AppCards,
    AppFounded,
    AppLoader,
  },
  data() {
    return {
      store,
      prova: 2,
    };
  },
  created() {
    axios.get(this.store.cardsApiUrl).then((response) => {
      this.store.cards = response.data.data;
    });
  },
};
</script>

<template>
  <main>
    <div class="container">
      <AppSelect />
      <div class="container-cards">
        <AppLoader v-if="store.cards.length === 0" />
        <AppFounded v-else />
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
