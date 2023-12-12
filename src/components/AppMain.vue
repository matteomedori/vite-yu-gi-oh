<script>
import AppSelect from "./AppSelect.vue";
import AppCards from "./AppCards.vue";

export default {
  name: "AppMain",
  components: {
    AppSelect,
    AppCards,
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
