<script>
export default {
  name: "AppSelect",
};
</script>

<template>
  <div class="select-comp">
    <label for="type" hidden>Choose a monster type:</label>
    <select name="type" id="type">
      <option value="Alien">Alien</option>
    </select>
  </div>
</template>

<style lang="scss">
.select-comp {
  padding: 25px 15px;

  select {
    padding: 10px 90px 10px 8px;
    border: none;
    border-radius: 5px;
  }
}
</style>
