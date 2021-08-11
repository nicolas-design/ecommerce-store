/* eslint-disable @next/next/link-passhref */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/header';

const backgroundPage = css`
  background: url('https://st2.depositphotos.com/5190501/12250/i/950/depositphotos_122507852-stock-photo-beads-furniture-and-tools-for.jpg');
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: -1;
  margin: 0px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const buttonDiv = css`
  text-align: center;

  background-color: transparent;
  border: 7px solid;
  font-size: 40px;
  font-weight: bold;
  border-radius: 10px;
  padding: 40px;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff,
    0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;

  @media screen and (max-height: 550px) {
    font-size: 32px;
    padding: 30px;
  }
`;

const div2 = css`
  width: 100%;
  height: 100vh;
  background-color: #fce38a;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 550px) {
    padding-top: 15px;
    flex-direction: column;
    height: 120vh;
  }
`;

const flexItem = css`
  background-color: #95e1d3;
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 550px) {
    width: 35vw;
    height: 35vw;
  }
  @media screen and (max-width: 380px) {
    width: 50vw;
    height: 50vw;
  }
`;

const cursorTest = css`
  cursor: url('/rings2.png'), auto;
`;

const cursorAcc = css`
  cursor: url('/extra.png'), auto;
`;

const cursorBr = css`
  cursor: url('/br2.png'), auto;
`;

type Props = {
  total: number;
};

export default function Home(props: Props) {
  return (
    <div>
      <Header total={props.total} />
      <div css={backgroundPage}>
        <button css={buttonDiv}>Shop now</button>
      </div>
      <div css={div2}>
        <div css={flexItem}>
          <div css={cursorTest}>
            <Link href="/products/ring">
              <Image
                data-cy="rings-link"
                src="/newRingR.png"
                alt="ring"
                width={270}
                height={270}
              />
            </Link>
          </div>
        </div>
        <div css={flexItem}>
          <div css={cursorBr}>
            <Link href="/products/bracelet">
              <Image
                src="/armband-removebg-preview.png"
                alt="bracelet"
                width={400}
                height={300}
              />
            </Link>
          </div>
        </div>
        <div css={flexItem}>
          <div css={cursorAcc}>
            <Link href="/products/extra">
              <Image
                src="/phoneStrapRemove.png"
                alt="accessory"
                width={300}
                height={300}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
