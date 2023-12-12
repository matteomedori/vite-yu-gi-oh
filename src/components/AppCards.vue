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
    <div class="founded">founded</div>
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
  background-color: white;
  padding: 45px 45px 10px 45px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  row-gap: 20px;

  .founded {
    width: 100%;
  }
}
</style>
