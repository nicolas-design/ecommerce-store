import cookies from 'js-cookie';

export function getCartValue() {
  const cookieVal = cookies.getJSON('cart');
  return Array.isArray(cookieVal) ? cookieVal : [];
}

export function getTotalQuantity() {
  const cookieVal = cookies.getJSON('cart');
  let cookieQuantity;
  if (Array.isArray(cookieVal)) {
    const newArr = cookieVal.map((prod) => {
      return prod.quantity;
    });
    cookieQuantity = newArr.reduce(function (a, b) {
      a = parseInt(a);
      b = parseInt(b);
      console.log(a, b);
      return a + b;
    }, 0);
  } else {
    cookieQuantity = 0;
  }
  return Array.isArray(cookieVal) ? cookieQuantity : 0;
}

export function getCartValueId() {
  const cookieVal = cookies.getJSON('cart');
  const cookieId = Array.isArray(cookieVal)
    ? cookieVal.map((prod) => {
        return prod.id;
      })
    : [];
  return Array.isArray(cookieVal) ? cookieId : [];
}

export function getCartValueQuantityById(id) {
  const cookieVal = cookies.getJSON('cart');
  let cookieQuan;
  if (Array.isArray(cookieVal)) {
    const newArr = cookieVal.filter((prod) => {
      return prod.id === id;
    });
    cookieQuan = newArr.map((prod) => {
      return prod.quantity;
    });
  } else {
    cookieQuan = [];
  }
  return Array.isArray(cookieVal) ? cookieQuan : [];
}

export function setPrice(example) {
  let sum = 0;
  example.map((prod) => {
    sum += getCartValueQuantityById(prod.id) * prod.productPrice;
    return null;
  });

  return Math.round(sum * 100) / 100;
}

export function addToCart(productId, quantity) {
  const previousCookie = getCartValue();
  let newCart;
  if (isNaN(productId)) parseInt(productId);
  if (isNaN(quantity)) parseInt(quantity);
  if (previousCookie.length > 0) {
    if (getCartValueId().includes(productId)) {
      newCart = previousCookie.filter((prod2) => prod2.id !== productId);
    } else {
      newCart = [
        ...previousCookie,
        {
          id: productId,

          quantity: quantity,
        },
      ];
    }
  } else {
    newCart = [
      {
        id: productId,

        quantity: quantity,
      },
    ];
  }
  cookies.set('cart', newCart);
  return newCart;
}

export function deleteAll() {
  cookies.set('cart', []);
}

export function deleteById(id) {
  const newCart = getCartValue();
  const sum = newCart.filter((prod) => {
    return prod.id !== id;
  });
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (sum !== null) {
    cookies.set('cart', sum);
  } else {
    cookies.set('cart', []);
  }
}

/* export function getQuantityCart() {
  const cookieVal = cookies.getJSON('cart');
  return Array.isArray(cookieVal) ? cookieVal : [];
}

export function addQuantityCart(productId) {
  const previousCookie = getCartValue();
  const quantity = previousCookie.find((prod))
}*/
