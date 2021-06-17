/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/header';

const wrap = css`
  min-height: 100vh;
  width: 100%;
  background-color: #95e1d3;
`;

const wrap2 = css`
  padding: 70px 20px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const innerFlex = css`
  width: 240px;
  height: 310px;
  margin: 20px;
  background-color: #ff75a0;
`;

const imgWrapper = css`
  width: 240px;
  height: 240px;
`;

const textWr = css`
  width: 240px;
  height: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const txt = css`
  color: white;
  margin-top: 10px;
  margin-left: 3px;
  margin-right: 3px;
  font-weight: bold;
`;
const breakDiv = css`
  flex-basis: 100%;
  height: 0;
`;

const price = css`
  color: white;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export default function ringPage(props) {
  const prodsFiltered = props.data;

  return (
    <div>
      <Header total={props.total} />
      <div css={wrap}>
        <div css={wrap2}>
          {prodsFiltered.map((prod) => {
            return (
              <div css={innerFlex} key={prod.id}>
                <div css={imgWrapper}>
                  <Image
                    src={`/${prod.productImg}`}
                    alt="ring"
                    width={240}
                    height={240}
                  />
                </div>
                <Link href={`/products/item/${prod.id}`}>
                  <a data-cy={prod.id}>
                    <div css={textWr}>
                      <div css={txt}>{prod.productColor}</div>
                      <div css={txt}>{prod.productName}</div>
                      <div css={txt}>{prod.productType}</div>
                      <div css={breakDiv} />
                      <div css={price}>{prod.productPrice}€</div>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const product = context.query.product;
  const { getProductsByType } = await import('../../utils/database');
  const data = await getProductsByType(product);
  console.log(data);
  return {
    props: {
      data: data,
    },
  };
}
