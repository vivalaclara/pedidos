import { Request, Response } from 'express';
import { Product } from '../models/productmodel';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../controllers/productcontroller';
//service do produto
export class ProductService {
  static async getAllProducts(req: Request, res: Response) {
    try {
      await getProducts(req, res);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar produtos.' });
    }
  }

  static async createProduct(req: Request, res: Response) {
    try {
      await addProduct(req, res);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao adicionar produto.' });
    }
  }

  static async updateProduct(req: Request, res: Response) {
    try {
      await updateProduct(req, res);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar produto.' });
    }
  }

  static async deleteProduct(req: Request, res: Response) {
    try {
      await deleteProduct(req, res);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao remover produto.' });
    }
  }
}
