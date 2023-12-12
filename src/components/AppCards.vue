<script>
import AppCard from "./AppCard.vue";
import { store } from "../store";

export default {
  name: "AppCards",
  components: {
    AppCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="cards">
    <AppCard
      v-for="card in store.cards"
      :img="card.card_images[0].image_url"
      :title="card.name"
      :archetype="card.archetype"
    />
  </div>
</template>

<style lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  row-gap: 20px;
}
</style>
