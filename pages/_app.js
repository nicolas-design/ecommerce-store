import '../styles/globals.css';
import { useState } from 'react';
import { getTotalQuantity } from '../utils/cookies';

function MyApp({ Component, pageProps }) {
  const [total, setTotal] = useState(getTotalQuantity());
  return <Component {...pageProps} total={total} setTotal={setTotal} />;
}

export default MyApp;
