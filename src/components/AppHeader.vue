<script>
import AppLogo from "./AppLogo.vue";
export default {
  name: "AppHeader",
  components: {
    AppLogo,
  },
};
</script>

<template>
  <header>
    <AppLogo />
    <h1>Yu-Gi-Oh Api</h1>
  </header>
</template>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  padding: 20px 25px;
  h1 {
    font-size: 40px;
    margin-left: 20px;
    font-weight: 500;
  }
}
</style>
