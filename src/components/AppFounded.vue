<script>
import { store } from "../store";
export default {
  name: "AppFounded",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="founded">Found {{ store.cards.length }} cards</div>
</template>

<style lang="scss">
@use "../assets/scss/partials/variables" as *;

.founded {
  width: 100%;
  background-color: $founded-bg;
  color: white;
  padding: 20px 15px;
  font-weight: 600;
}
</style>
