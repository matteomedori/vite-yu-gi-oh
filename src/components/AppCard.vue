<script>
export default {
  name: "AppCard",
};
</script>

<template>
  <div class="card">
    <div>img</div>
    <div>title</div>
    <div>type</div>
  </div>
</template>

<style lang="scss">
.card {
  height: 100px;
  background-color: red;
  width: calc((100% - 100px) / 5);
}
</style>
