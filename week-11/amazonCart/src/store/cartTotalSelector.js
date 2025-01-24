import { selector } from "recoil";
import { cartItemAtom } from "./cartItemState";

export const cartTotalSelector = selector({
  key: "cartTotalSelector",
  get: ({ get }) => {
    const products = get(cartItemAtom);

    let totalProducts = 0;
    let totalPrice = 0;

    products.forEach((product) => {
      totalProducts += product.quantity;
      totalPrice += product.price * product.quantity;
    });

    totalPrice = totalPrice.toFixed(2);

    return { totalProducts, totalPrice };
  },
});
