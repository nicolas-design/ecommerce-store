/* eslint-disable array-callback-return */
import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

const setPostgresDefaultsOnHeroku = require('./setPostgresDefaultsOnHeroku.js');

setPostgresDefaultsOnHeroku();

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
