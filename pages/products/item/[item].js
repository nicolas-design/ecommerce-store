/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import Header from '../../../components/header';
import {
  addToCart,
  getCartValueId,
  getTotalQuantity,
} from '../../../util/cookies';

export default function RingPage(props) {
  const item = props.data;
  const [add, setAdd] = useState(getCartValueId);
  const [quantity, setQuantity] = useState(1);

  const wrap = css`
    min-height: 100vh;
    width: 100%;
    background-color: #95e1d3;
    padding: 90px 50px;
  `;

  const gridWrap = css`
    display: grid;
    grid-template-rows: repeat(10, 50px);
    grid-template-columns: 45% 10% 35% auto;
    @media screen and (max-width: 900px) {
      grid-template-columns: 45% 10% 40% auto;
    }
    @media screen and (max-width: 600px) {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  `;

  const imgStyle = css`
    grid-column-start: 1;
    grid-column-end: 2;
    align-self: start;
  `;

  const header = css`
    grid-column-start: 3;
    font-size: 32px;
    font-weight: bold;
  `;

  const descript = css`
    grid-column-start: 3;
    grid-row-start: 2;
    margin-top: 20px;
    word-spacing: 4px;
    line-height: 1.6;
    @media screen and (max-width: 900px) {
      grid-row-start: 3;
    }
  `;

  const price = css`
    grid-column-start: 3;
    grid-row-start: 6;
    justify-self: center;
    font-weight: bold;
    @media screen and (max-width: 900px) {
      grid-row-start: 7;
    }
    @media screen and (max-width: 600px) {
      margin: 10px;
    }
  `;

  const button = css`
    grid-column-start: 3;
    grid-row-start: 8;
    justify-self: center;
    width: 100px;
    height: 40px;
    background-color: #eaffd0;
    border: none;
    font-weight: bold;
    margin: 10px;
    @media screen and (max-width: 900px) {
      grid-row-start: 9;
    }
  `;

  const drop = css`
    grid-column-start: 3;
    grid-row-start: 7;
    justify-self: center;
    height: 40px;
    width: 100px;
    @media screen and (max-width: 900px) {
      grid-row-start: 8;
    }
  `;

  function createDrop(obj) {
    const quant = [];
    for (let i = 1; i <= obj; i++) {
      quant.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }
    return quant;
  }

  return (
    <div>
      <Header total={props.total} />
      <div css={wrap}>
        {item.map((prod) => {
          return (
            <div key={prod.id} css={gridWrap}>
              <div css={header}>
                {prod.productColor} {prod.productName} {prod.productType}
              </div>
              <div css={imgStyle}>
                <Image
                  src={`/${prod.productImg}`}
                  alt="ring"
                  width={500}
                  height={500}
                />
              </div>

              <div css={descript}>{prod.productDescription}</div>
              <div css={price}>{prod.productPrice}€</div>

              <select
                data-cy="dropdown"
                css={drop}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {createDrop(prod.productQuantity)}
              </select>
              <button
                data-cy="add"
                css={button}
                onClick={() => {
                  addToCart(
                    prod.id,

                    quantity,
                  );
                  setAdd(getCartValueId);
                  props.setTotal(getTotalQuantity);
                }}
              >
                {add.includes(prod.id) ? 'Remove' : 'Add'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const item = context.query.item;
  const { getProductById } = await import('../../../util/database');
  const data = await getProductById(item);
  return {
    props: {
      data: data,
    },
  };
}
