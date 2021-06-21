import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/header';
import {
  deleteById,
  getCartValueQuantityById,
  getTotalQuantity,
  setPrice,
} from '../utils/cookies';

const wrap = css`
  min-height: 100vh;
  width: 100%;
`;

const wrap2 = css`
  padding: 70px 20px 0;

  display: flex;
  flex-direction: column;
`;

const item = css`
  border: 2px solid grey;
  margin: 10px 50px;
  padding: 10px 30px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const total = css`
  display: flex;
  align-items: center;

  margin: 0px 50px;
  padding: 0px 30px;
  height: 100px;
  font-weight: bold;
  justify-content: flex-end;
  font-size: 16px;
`;

const linkStyle = css`
  display: flex;
  justify-content: flex-end;
  margin: 0px 50px;
  padding: 0px 30px;
  text-decoration: underline;
`;

export default function CartPage(props) {
  const prodsFiltered = props.data;
  const [prods, setProds] = useState(prodsFiltered);
  console.log('prodFilter', prodsFiltered);
  const [totalPrice, setTotalPrice] = useState(setPrice(prods));

  setPrice(prods);

  return (
    <div css={wrap}>
      <Header total={props.total} />
      <div css={wrap2}>
        {prods.map((prod) => {
          return (
            <div key={prod.id} css={item}>
              <Image
                src={`/${prod.productImg}`}
                alt="product"
                width={80}
                height={80}
              />
              <div>
                {prod.productColor} {prod.productName} {prod.productType}
              </div>{' '}
              <div>{getCartValueQuantityById(prod.id)}</div>
              <div>{prod.productPrice}€</div>
              <button
                onClick={() => {
                  deleteById(prod.id);
                  props.setTotal(getTotalQuantity);
                  const newArr = prods.filter((productsF) => {
                    return productsF.id !== prod.id;
                  });
                  console.log('new', newArr);
                  setProds(newArr);
                  setTotalPrice(setPrice(prods));
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>{' '}
      <div css={total}>
        <div>Total price: {totalPrice}€</div>
      </div>
      <div css={linkStyle}>
        <Link rel="preload" href="/testcheck">
          <a data-cy="checkout">Check Out</a>
        </Link>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context.req.cookies);
  const cookies = JSON.parse(context.req.cookies.cart);
  console.log(cookies);
  const { getProductById } = await import('../utils/database');
  const res = await cookies.map((obj) => {
    return getProductById(obj.id);
  });
  const data2 = await Promise.all(res);
  let data = [];
  for (let i = 0; i < data2.length; i++) {
    data = data.concat(data2[i]);
  }
  console.log('backend', data);

  return {
    props: {
      data: data,
    },
  };
}
