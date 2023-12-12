<script>
export default {
  name: "AppCard",
  props: ["img", "title", "archetype"],
};
</script>

<template>
  <div class="card">
    <img :src="img" alt="" />
    <h3>{{ title }}</h3>
    <div class="archetype">{{ archetype }}</div>
  </div>
</template>

<style lang="scss">
@use "../assets/scss/partials/variables" as *;

.card {
  height: 410px;
  background-color: $main-bg;
  width: calc((100% - 100px) / 5);
  text-align: center;

  h3 {
    color: white;
    margin: 25px 0;
  }

  .archetype {
    font-size: 16px;
  }
}
</style>
