import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

/*export const data = [
  {
    id: 1,
    type: 'ring',
    name: 'ocean',
    quantity: 1,
    color: 'blue',
    image: '?',
  },
  {
    id: 2,
    type: 'ring',
    name: 'rose',
    quantity: 1,
    color: 'pink',
    image: '?',
  },
  {
    id: 3,
    type: 'ring',
    name: 'beach',
    quantity: 1,
    color: 'red',
    image: '?',
  },
  {
    id: 4,
    type: 'ring',
    name: 'beach',
    quantity: 1,
    color: 'red',
    image: '?',
  },
  {
    id: 5,
    type: 'bracelet',
    name: 'beach',
    quantity: 1,
    color: 'red',
    image: '?',
  },
  {
    id: 6,
    type: 'extra',
    name: 'phone',
    quantity: 1,
    color: 'mixed',
    image: '?',
  },
];*/

dotenvSafe.config();

function connectToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }
  return sql;
}

const sql = connectToDatabase();

export async function getProducts() {
  const res = await sql`SELECT * FROM products`;
  return res.map((prod) => {
    camelcaseKeys(prod);
  });
}

export async function getProductById(id) {
  const res = await sql`SELECT * FROM products WHERE id = ${id}`;
  return res.map((prod) => {
    return camelcaseKeys(prod);
  });
}

export async function getProductsByType(type) {
  const res = await sql`SELECT * FROM products WHERE product_type = ${type}`;
  console.log(res);
  return res.map((prod) => {
    return camelcaseKeys(prod);
  });
}
