/**
 * @jest-environment jsdom
 */
import { addToCart, deleteAll, getCartValue, setPrice } from '../cookies';

test('addToCookie works as expected when adding', () => {
  let newCart = [
    {
      id: 1,
      quantity: 2,
    },
  ];
  expect(addToCart(1, 2)).toStrictEqual(newCart);
});

test('addToCookie removes item when item already exists', () => {
  let newCart = [];
  addToCart(1, 4);

  expect(getCartValue()).toStrictEqual(newCart);
});

test('setPrice returns total Value of items', () => {
  addToCart(2, 2);
  const exampleBackend = [{ id: 2, productPrice: 5.2 }];
  expect(setPrice(exampleBackend)).toBe(10.4);
});
