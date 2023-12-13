import { reactive } from "vue";

export const store = reactive({
  archetypes: [],
  cards: [],
  selectValue: "",
  cardsApiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0",
  archetypeApiUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
});
