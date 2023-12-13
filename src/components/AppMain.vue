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
  methods: {
    //selectCards, se non ho selezionato alcun archetipo, fa una chiamata generale alla API
    // con i parametri num e offeset, altrimenti fa una chiamata con archetype come parametro
    selectCards() {
      if (this.store.selectValue === "") {
        axios
          .get(this.store.apiYuGiOh.defaultAPI, {
            params: {
              num: 15,
              offset: 0,
            },
          })
          .then((response) => {
            this.store.cards = response.data.data;
          });
      } else {
        axios
          .get(this.store.apiYuGiOh.defaultAPI, {
            params: {
              archetype: this.store.selectValue,
            },
          })
          .then((response) => {
            this.store.cards = response.data.data;
          });
      }
    },
  },
  created() {
    this.selectCards();
  },
};
</script>

<template>
  <main>
    <div class="container">
      <AppSelect @selectArchetype="selectCards" />
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
