import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "./fontfile.css";

//interface com os tipos das variáveis a serem buscadas no backend
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  availability: boolean;
}

//styled components
const DivLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
const DivProduto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background-color: #DCD3D3;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 25px;
  margin: 20px;
  width: 350px;
  box-sizing: border-box;

`;
const NomeProduto = styled.h1`
font-size: 20px;
color: black;
margin:1px;
text-align:center;
font-family: 'Girassol';`

const IdProduto = styled.p`
margin: 3px;
font-weight: lighter;
font-family: 'Roboto-Light';
font-size: 16px;
`
const DescProduto = styled.p`
margin: 5px;
font-family: 'Roboto-Bold';
font-size: 14px;
`
const InfoProduto = styled.p`
margin: 5px;
font-size: 14px;
font-family: 'Roboto-Regular'
font-weight: bold;`

//componente a ser exportado
const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  }

  return (
    <DivLista>
      {products.map((product) => (
        <DivProduto key={product.id}>
          <NomeProduto>{product.name}</NomeProduto>
          <IdProduto>produto de id {product.id}</IdProduto>
          <DescProduto>{product.description}</DescProduto>
          <InfoProduto>Preço: R${product.price}</InfoProduto>
          <InfoProduto>disponível: {product.availability? 'SIM' : 'NÃO'}</InfoProduto>
        </DivProduto>
      ))}
    </DivLista>
  );
};

export default ProductList;
