import { atom } from 'recoil';
export const wishItemsState = atom({
  key: 'wishItemsState',
  default: [
    {
      id: 1,
      name: 'Mechanical keyboard',
      price: 2290,
      image: 'https://m.media-amazon.com/images/I/41EckzKo9lL._SS220_.jpg',
    },
    { id: 2, name: 'USB-C adapter', price: 289, image: '' },
    {
      id: 3,
      name: 'Desktop monitor',
      price: 9990,
      image: 'https://m.media-amazon.com/images/I/41T6tUGZYkL._SS220_.jpg',
    },
    { id: 4, name: 'A notebook for big ideas', price: 270, image: '' },
  ],
});
