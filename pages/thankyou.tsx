/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';

const wrap = css`
  display: flex;
  padding-top: 50px;
  flex-wrap: wrap;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const linkStyle = css`
  margin-top: 50px;
  text-decoration: underline;
`;

const emojiStyle = css`
  font-size: 50px;
`;
export default function Thankyou() {
  return (
    <div css={wrap}>
      <h1>Thank you!</h1>

      <h4>Thank you for trusting us and supporting our business!</h4>
      <h4>You will receive an email with the shipping information shortly.</h4>
      <div css={emojiStyle}>&#10004;</div>

      <Link href="/">
        <a css={linkStyle}>Keep shopping</a>
      </Link>
    </div>
  );
}
