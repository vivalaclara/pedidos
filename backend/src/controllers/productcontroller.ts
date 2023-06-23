import { Request, Response } from 'express';
import { Pool } from 'pg';
import { Product } from '../models/productmodel';

//conexão com o banco de dados postgreSQL, utilizando elephantSQL para criar a base de dados
const pool = new Pool({
  user: 'ewhqksmz',
  host: 'motty.db.elephantsql.com',
  database: 'ewhqksmz',
  password: 'KAxkwJzDVm12OCTJcD1gk4hjD6FMQkvo',
  port: 5432,
});

// get (listar)
export const getProducts = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM products');
    const products: Product[] = result.rows;
    client.release();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos no banco de dados.' });
  }
};

// add (adicionar)
export const addProduct = async (req: Request, res: Response) => {
  const { name, description, price, available_to_buy } = req.body;
  if (!name || !description || !price || available_to_buy === undefined) {
    return res.status(400).json({ error: 'Dados inválidos.' });
  }

  try {
    const client = await pool.connect();
    await client.query(
      'INSERT INTO products (name, description, price, available_to_buy) VALUES ($1, $2, $3, $4)',
      [name, description, price, available_to_buy]
    );
    client.release();
    res.status(201).json({ message: 'Produto adicionado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar produto no banco de dados.' });
  }
};

// update (editar)
export const updateProduct = async (req: Request, res: Response) => {
  const { name, description, price, available_to_buy } = req.body;
  if (!name || !description || !price || !available_to_buy) {
    return res.status(400).json({ error: 'Dados inválidos.' });
  }

  const id = parseInt(req.params.id);

  try {
    const client = await pool.connect();
    const result = await client.query(
      'UPDATE products SET name=$1, description=$2, price=$3, available_to_buy=$4 WHERE id=$5',
      [name, description, price, available_to_buy, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Produto não encontrado.' });
    }
    client.release();
    res.json({ message: 'Produto atualizado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto no banco de dados.' });
  }
};

// delete (deletar)
export const deleteProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const client = await pool.connect();
    const result = await client.query('DELETE FROM products WHERE id=$1', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Produto não encontrado.' });
    }
    client.release();
    res.json({ message: 'Produto removido com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover produto do banco de dados.' });
  }
};
