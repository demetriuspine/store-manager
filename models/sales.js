const connection = require('./connection');

const createNewSale = async () => {
  const [rows] = await connection.execute('INSERT INTO StoreManager.sales VALUE ()');
  return rows.insertId;
};

const create = async (sales) => {
  const id = await createNewSale();
  const query = 'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE ?';
  const newSaleValues = sales.map((sale) => [id, sale.product_id, sale.quantity]);
  await connection.query(
    query, [newSaleValues],
  );
  return {
    id,
    itemsSold: sales,
  };
};

const getAll = async () => {
  const query = `SELECT p.sale_id AS saleId, s.date, p.product_id, p.quantity
                FROM
                    StoreManager.sales_products AS p
                INNER JOIN
                    StoreManager.sales AS s
                ON p.sale_id = s.id;`;
  const [rows] = await connection.execute(query);
  return rows;
};

const getById = async (id) => {
  const query = `SELECT s.date, p.product_id, p.quantity
                FROM
                  StoreManager.sales_products AS p
                INNER JOIN
                  StoreManager.sales AS s ON p.sale_id = s.id
                WHERE p.sale_id = ?;`;
  const [rows] = await connection.execute(query, [id]);
  console.log(rows);
  return rows;
};

module.exports = {
  create,
  getAll,
  getById,
};