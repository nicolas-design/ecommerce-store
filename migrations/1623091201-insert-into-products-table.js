const products = [
  {
    product_type: 'ring',
    product_name: 'ocean',
    product_quantity: 3,
    product_color: 'blue',
    product_description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    product_img: 'underConst.jpg',
    product_price: 5.2,
  },
  {
    product_type: 'ring',
    product_name: 'rose',
    product_quantity: 2,
    product_color: 'pink',
    product_description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    product_img: 'underConst.jpg',
    product_price: 5.2,
  },
  {
    product_type: 'ring',
    product_name: 'beach',
    product_quantity: 1,
    product_color: 'red',
    product_description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    product_img: 'underConst.jpg',
    product_price: 5.2,
  },
  {
    product_type: 'ring',
    product_name: 'beach',
    product_quantity: 1,
    product_color: 'red',
    product_description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    product_img: 'underConst.jpg',
    product_price: 5.2,
  },
  {
    product_type: 'bracelet',
    product_name: 'beach',
    product_quantity: 2,
    product_color: 'red',
    product_description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    product_img: 'underConst.jpg',
    product_price: 5.2,
  },
  {
    product_type: 'extra',
    product_name: 'phone',
    product_quantity: 4,
    product_color: 'colorful',
    product_description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    product_img: 'underConst.jpg',
    product_price: 5.2,
  },
];

exports.up = async function up(sql) {
  // <insert magic here>
  await sql`
	 INSERT INTO products ${sql(
     products,
     'product_type',
     'product_name',
     'product_quantity',
     'product_color',
     'product_description',
     'product_img',
     'product_price',
   )}
	`;
};

exports.down = async function down(sql) {
  // just in case...
  for (const product of products) {
    await sql`
			DELETE FROM
			products
			WHERE
			product_type = ${product.product_type} AND
			product_name = ${product.product_name}
		`;
  }
};
