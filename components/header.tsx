/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getTotalQuantity } from '../utils/cookies';

const headerDiv = css`
  position: fixed;
  top: 0%;
  left: 0%;
  right: 0%;
  height: 48px;
  background-color: #ff75a0;
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 1000;
`;

const bgcolor = css`
  background-color: rgba(207, 63, 158, 0.23);
`;

const aurumStyle = css`
  position: absolute;
  margin-left: 1%;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  display: flex;
  justify-content: center;
  color: white;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const middleT = css`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  margin-left: 45%;
  color: white;
  font-family: 'Vibur';
`;

const imgStyle = css`
  position: absolute;
  color: #95e1d3;
  right: 2%;
`;

const homeStyle = css`
  position: absolute;
  right: 8%;
`;

const totalStyle = css`
  position: absolute;
  right: 4%;
  top: 9px;
  color: white;
`;

type Props = {
  total: number;
};

const aurum = css``;
export default function Header(props: Props) {
  return (
    <header css={headerDiv}>
      <h3 css={aurumStyle}>Aurum</h3>
      <h5 css={middleT}>handmade jewelery</h5>
      <div css={imgStyle}>
        <Link href="/cart">
          <a data-cy="cart">
            <Image src="/cart.svg" height={20} width={20} />
          </a>
        </Link>
      </div>
      <div css={totalStyle}>{props.total}</div>
      <div css={homeStyle}>
        <Link href="/">
          <Image src="/home.svg" height={20} width={20} />
        </Link>
      </div>
    </header>
  );
}
