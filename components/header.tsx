/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

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

  @media screen and (max-width: 700px) {
    margin-left: 40%;
  }

  @media screen and (max-width: 400px) {
    margin-left: 37%;
  }

  @media screen and (max-width: 365px) {
    margin-left: 34%;
  }
`;

const imgStyle = css`
  position: absolute;
  color: #95e1d3;
  right: 2%;
  display: flex;
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

const imgSpace = css`
  margin-right: 24px;
  @media screen and (max-width: 600px) {
    margin-right: 12px;
  }
`;

const cartSpace = css``;

const totalSpace = css`
  margin-right: 4px;
  color: white;
`;

type Props = {
  total: number;
};

export default function Header(props: Props) {
  return (
    <header css={headerDiv}>
      <h3 css={aurumStyle}>Aurum</h3>

      <h5 css={middleT}>handmade jewelry</h5>

      <div css={imgStyle}>
        <div css={imgSpace}>
          <Link href="/">
            <a>
              <Image src="/home.svg" height={20} width={20} />
            </a>
          </Link>
        </div>
        <div css={totalSpace}>{props.total}</div>
        <div>
          <Link href="/cart">
            <a data-cy="cart">
              <Image src="/cart.svg" height={20} width={20} />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
