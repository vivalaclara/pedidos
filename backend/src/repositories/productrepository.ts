import { Pool } from 'pg';
import { Product } from '../models/productmodel';
//repository do produto
const pool = new Pool({
  user: 'ewhqksmz',
  host: 'motty.db.elephantsql.com',
  database: 'ewhqksmz',
  password: 'KAxkwJzDVm12OCTJcD1gk4hjD6FMQkvo',
  port: 5432,
});

export class ProductRepository {
  static async getAllProducts(): Promise<Product[]> {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM products');
    const products: Product[] = result.rows;
    client.release();
    return products;
  }

  static async addProduct(product: Product): Promise<void> {
    const { name, description, price, available_to_buy } = product;
    const client = await pool.connect();
    await client.query(
      'INSERT INTO products (name, description, price, available_to_buy) VALUES ($1, $2, $3, $4)',
      [name, description, price, available_to_buy]
    );
    client.release();
  }
  

  static async updateProduct(product: Product): Promise<boolean> {
    const { id, name, description, price, available_to_buy } = product;
    const client = await pool.connect();
    const result = await client.query(
      'UPDATE products SET name=$1, description=$2, price=$3, available_to_buy=$4 WHERE id=$5',
      [name, description, price, available_to_buy, id]
    );
    client.release();
    return result.rowCount > 0;
  }

  static async deleteProduct(id: number): Promise<boolean> {
    const client = await pool.connect();
    const result = await client.query('DELETE FROM products WHERE id=$1', [id]);
    client.release();
    return result.rowCount > 0;
  }
}
