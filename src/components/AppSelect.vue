<script>
import { store } from "../store";
import axios from "axios";

export default {
  name: "AppSelect",
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(this.store.apiYuGiOh.archetypeAPI).then((response) => {
      this.store.archetypes = response.data;
    });
  },
};
</script>

<template>
  <div class="select-comp">
    <label for="archetype" hidden>Choose a monster archetype:</label>
    <select
      name="archetype"
      id="archetype"
      v-model="store.selectValue"
      @change="$emit('selectArchetype')"
    >
      <option selected value="">Select Archetype</option>
      <option
        :value="archetype.archetype_name"
        v-for="archetype in store.archetypes"
      >
        {{ archetype.archetype_name }}
      </option>
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
