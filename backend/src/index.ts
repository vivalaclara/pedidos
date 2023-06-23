import express from 'express';
import { ProductService } from './services/productservice';
import cors from 'cors';

const app = express();
app.use(express.json());

//configurar o cors
const corsOptions = {
  origin: 'http://localhost:3000', // Origem permitida
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
};

app.use(cors(corsOptions));

// visualizar todos os produtos
app.get('/products', ProductService.getAllProducts);

// adicionar novo produto
app.post('/products', ProductService.createProduct);

// editar produto por id
app.put('/products/:id', ProductService.updateProduct);

// remover produto por id
app.delete('/products/:id', ProductService.deleteProduct);

// iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor em execução na porta 3000.');
});
