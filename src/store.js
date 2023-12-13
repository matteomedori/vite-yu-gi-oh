import { reactive } from "vue";

export const store = reactive({
  archetypes: [],
  cards: [],
  selectValue: "",
  apiYuGiOh: {
    defaultAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    archetypeAPI: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  },
});
