import { atom, selector } from "recoil";

export const productsState = atom({
  key: "productsStateAtom",
  default: selector({
    key: "productsStateSelector",
    get: async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      return data;
    },
  }),
});
