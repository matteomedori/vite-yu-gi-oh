<script>
import AppCard from "./AppCard.vue";

export default {
  name: "AppCards",
  components: {
    AppCard,
  },
};
</script>

<template>
  <div class="cards">
    <div class="founded">founded</div>
    <AppCard />
  </div>
</template>

<style lang="scss">
.cards {
  background-color: white;
  padding: 45px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  row-gap: 20px;

  .founded {
    width: 100%;
  }
}
</style>
