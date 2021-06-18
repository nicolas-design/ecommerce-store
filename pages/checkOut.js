/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';
import { getCartValueQuantityById } from '../utils/cookies';

const wrap = css`
  min-height: 100vh;
  width: 100%;
  background-color: #95e1d3;
  padding-top: 50px;
  padding-left: auto;

  padding-right: auto;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
`;

const wrap2 = css`
  margin: 0 20%;
  padding: 70px 20px;
  background-color: white;
  display: flex;
  max-width: 50%;
  flex-wrap: wrap;
  min-width: 400px;
  border-radius: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const totalPriceStyle = css`
  margin: 10px;
  font-weight: bold;
`;

const item = css`
  margin: 10px 0;
`;

const input = css`
  padding: 5px;
`;

const buttonStyle = css`
  text-decoration: underline;
`;
const txtStyle = css`
  min-width: 300px;
  display: flex;
  justify-content: space-between;
`;

export default function CheckOut(props) {
  const prodsFiltered = props.data;
  const [prods, setProds] = useState(prodsFiltered);
  console.log('prodFilter', prodsFiltered);
  const [totalPrice, setTotalPrice] = useState(setPrice());

  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [adress, setAdress] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [post, setPost] = useState(null);
  const [email, setEmail] = useState(null);
  const [card, setCard] = useState(null);
  const [date, setDate] = useState(null);
  const [ccv, setCCV] = useState(null);
  const [cardholder, setCardholder] = useState(null);

  const [pname, setNameP] = useState('');
  const [plastName, setLastNameP] = useState('');
  const [pAdress, setAdressP] = useState('');
  const [pCity, setCityP] = useState('');
  const [pCountry, setCountryP] = useState('');
  const [pPost, setPostP] = useState('');
  const [pemail, setEmailP] = useState('');
  const [pcard, setCardP] = useState('');
  const [pdate, setDateP] = useState('');
  const [pccv, setCCVP] = useState('');
  const [pcardholder, setCardholderP] = useState('');

  function validateCreditCardNumber(cardNumber) {
    cardNumber = cardNumber.split(' ').join('');
    if (
      parseInt(cardNumber) <= 0 ||
      !/\d{15,16}(~\W[a-zA-Z])*$/.test(cardNumber) ||
      cardNumber.length > 16
    ) {
      return false;
    }
    var carray = new Array();
    for (var i = 0; i < cardNumber.length; i++) {
      carray[carray.length] = cardNumber.charCodeAt(i) - 48;
    }
    carray.reverse();
    var sum = 0;
    for (var i = 0; i < carray.length; i++) {
      var tmp = carray[i];
      if (i % 2 != 0) {
        tmp *= 2;
        if (tmp > 9) {
          tmp -= 9;
        }
      }
      sum += tmp;
    }
    return sum % 10 == 0;
  }

  function setPrice() {
    let sum = 0;
    prods.map((prod) => {
      sum += getCartValueQuantityById(prod.id) * prod.productPrice;
    });

    return Math.round(sum * 100) / 100;
  }
  return (
    <div css={wrap}>
      <div css={wrap2}>
        <h1>Check out</h1>

        <div>
          <h3>Shipping address</h3>
        </div>
        <div css={item}>
          <label data-cy="name">
            <input
              css={input}
              placeholder="Name"
              onChange={(e) => {
                setNameP(e.currentTarget.value);
              }}
            />
          </label>
          {name === null ? (
            <div></div>
          ) : !/\d/.test(name) && name.length > 2 && name.length < 50 ? (
            <div>&#10004;</div>
          ) : (
            <div>Enter a valid Name</div>
          )}
        </div>
        <div css={item}>
          <label>
            <input
              data-cy="lastname"
              css={input}
              placeholder="Last name"
              onChange={(e) => {
                setLastNameP(e.currentTarget.value);
              }}
            />
          </label>
          {lastName === null ? (
            <div></div>
          ) : !/\d/.test(lastName) &&
            lastName.length > 1 &&
            lastName.length < 50 ? (
            <div>&#10004;</div>
          ) : (
            <div>Enter a valid last Name</div>
          )}
        </div>
        <div css={item}>
          <label>
            <input
              data-cy="adress"
              css={input}
              placeholder="Adress"
              onChange={(e) => {
                setAdressP(e.currentTarget.value);
              }}
            />
          </label>
          {adress === null ? (
            <div></div>
          ) : /\d+$/.test(adress) && adress.length > 2 && adress.length < 50 ? (
            <div>&#10004;</div>
          ) : (
            <div>Enter a valid adress</div>
          )}
        </div>
        <div css={item}>
          <label>
            <input
              css={input}
              data-cy="city"
              placeholder="City"
              onChange={(e) => {
                setCityP(e.currentTarget.value);
              }}
            />
            {city === null ? (
              <div></div>
            ) : !/\d/.test(city) && city.length > 1 && city.length < 50 ? (
              <div>&#10004;</div>
            ) : (
              <div>Enter a valid city</div>
            )}
          </label>
        </div>
        <div css={item}>
          <label>
            <input
              css={input}
              data-cy="country"
              placeholder="Country"
              onChange={(e) => {
                setCountryP(e.currentTarget.value);
              }}
            />
          </label>
          {country === null ? (
            <div></div>
          ) : !/\d/.test(country) &&
            country.length > 1 &&
            country.length < 50 ? (
            <div>&#10004;</div>
          ) : (
            <div>Enter a valid card number</div>
          )}
        </div>
        <div css={item}>
          <label>
            <input
              css={input}
              data-cy="post"
              placeholder="Postal Code"
              onChange={(e) => {
                setPostP(e.currentTarget.value);
              }}
            />
          </label>
          {post === null ? (
            <div></div>
          ) : typeof post === 'string' &&
            post.length > 0 &&
            post.length < 11 ? (
            <div>&#10004;</div>
          ) : (
            <div>Enter a valid postal code</div>
          )}
        </div>
        <div css={item}>
          <label>
            <input
              css={input}
              data-cy="email"
              placeholder="Email adress"
              onChange={(e) => {
                setEmailP(e.currentTarget.value);
              }}
            />
          </label>
          {email === null ? (
            <div></div>
          ) : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
              email,
            ) &&
            email.length > 2 &&
            email.length < 300 ? (
            <div>&#10004;</div>
          ) : (
            <div>Enter a valid Email</div>
          )}
        </div>
        <div>
          <h3>Card information</h3>
        </div>
        <div css={item}>
          <label>
            <input
              css={input}
              data-cy="card"
              placeholder="1234 1234 1234 1234"
              onChange={(e) => {
                setCardP(e.currentTarget.value);
              }}
            />
          </label>
          {card === null ? (
            <div></div>
          ) : validateCreditCardNumber(card) ? (
            <div>&#10004;</div>
          ) : (
            <div>Enter a valid cardnumber</div>
          )}
        </div>
        <div>
          <label>
            <input
              type="month"
              data-cy="date"
              css={input}
              placeholder="mm/yy"
              onChange={(e) => {
                setDateP(e.currentTarget.value);
              }}
            />
            <input
              css={input}
              placeholder="CVV"
              data-cy="cvv"
              onChange={(e) => {
                setCCVP(e.currentTarget.value);
              }}
            />
          </label>
        </div>
        <div css={txtStyle}>
          {date === null ? (
            <div></div>
          ) : Date.parse(date) - Date.parse(new Date()) > 0 ? (
            <div>&#10004;</div>
          ) : (
            <div>Enter a valid Date</div>
          )}

          {ccv === null ? (
            <div></div>
          ) : ccv.length >= 3 && ccv.length <= 4 && /^\d+$/.test(ccv) ? (
            <div>&#10004;</div>
          ) : (
            <div>Enter a valid CVV</div>
          )}
        </div>
        <div css={item}>
          <label>
            <input
              css={input}
              placeholder="Cardholder"
              data-cy="cardholder"
              onChange={(e) => {
                setCardholderP(e.currentTarget.value);
              }}
            />
          </label>
          {cardholder === null ? (
            <div></div>
          ) : /^[a-zA-Z]+ [a-zA-Z]+$/.test(cardholder) ? (
            <div>&#10004;</div>
          ) : (
            <div>Enter a valid Cardholder</div>
          )}
        </div>
        <div css={totalPriceStyle}>Total price: {totalPrice}€</div>
        {!/\d/.test(pname) &&
        pname.length > 2 &&
        pname.length < 50 &&
        !/\d/.test(plastName) &&
        plastName.length > 1 &&
        plastName.length < 50 &&
        /\d+$/.test(pAdress) &&
        pAdress.length > 2 &&
        pAdress.length < 50 &&
        !/\d/.test(pCity) &&
        pCity.length > 1 &&
        pCity.length < 50 &&
        !/\d/.test(pCountry) &&
        pCountry.length > 1 &&
        pCountry.length < 50 &&
        typeof pPost === 'string' &&
        pPost.length > 0 &&
        pPost.length < 11 &&
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          pemail,
        ) &&
        pemail.length > 2 &&
        pemail.length < 300 &&
        validateCreditCardNumber(pcard) &&
        Date.parse(pdate) - Date.parse(new Date()) > 0 &&
        pccv.length >= 3 &&
        pccv.length <= 4 &&
        /^\d+$/.test(ccv) &&
        /^[a-zA-Z]+ [a-zA-Z]+$/.test(pcardholder) ? (
          <Link href="/thankyou">
            <a data-cy="buttonCheck">
              <button>Submit</button>
            </a>
          </Link>
        ) : (
          <button
            data-cy="buttonCheck"
            onClick={() => {
              setName(pname);
              setLastName(plastName);
              setAdress(pAdress);
              setCity(pCity);
              setCountry(pCountry);
              setPost(pPost);
              setEmail(pemail);
              setCard(pcard);
              setDate(pdate);
              setCCV(pccv);
              setCardholder(pcardholder);
            }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context.req.cookies);
  let cookies = JSON.parse(context.req.cookies.cart);
  console.log(cookies);
  const { getProductById, getProducts } = await import('../utils/database');
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
