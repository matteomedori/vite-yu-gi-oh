<script>
import AppSelect from "./AppSelect.vue";

export default {
  name: "AppMain",
  components: {
    AppSelect,
  },
};
</script>

<template>
  <main>
    <div class="container">
      <AppSelect />
      <div class="cards">
        <div class="founded">founded</div>
        <div class="card">card</div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use "../assets/scss/partials/variables" as *;

main {
  background-color: $main-bg;

  .cards {
    background-color: white;
  }
}
</style>
