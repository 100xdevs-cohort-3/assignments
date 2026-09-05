import { selector } from 'recoil';
import { cartItemsState } from './cartItemsState';
export const cartTotalSelector = selector({
  key: 'cartTotalSelector',
  get: ({ get }) =>
    get(cartItemsState).reduce(
      (total, item) => ({
        count: total.count + item.quantity,
        price: total.price + item.price * item.quantity,
      }),
      { count: 0, price: 0 },
    ),
});
