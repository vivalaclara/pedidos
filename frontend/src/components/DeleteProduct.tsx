import React, { useState } from 'react';
import styled from 'styled-components';
import './fontfile.css'

//styled components de modal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const Label = styled.label`
  margin: 10px;
`;

const Input = styled.input`
  margin: 10px;
  border-radius: 45px;
  border: 1px transparent;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 5px;
  width: 200px;
`;

const Button = styled.button`
width: 100px;
height: 30px;
background-color: #D9D9D9;
font-family: 'Roboto-Bold';
color: black;
font-size: 12px;
border:1px transparent;
border-radius:45px;
padding:5px;
margin: 20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

&:hover {
    background-color:#F84646;
    color: white;}
`;

// componente a ser exportado
const DeleteProduct: React.FC = () => {
  const [productId, setProductId] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        console.log('Produto excluído com sucesso!');
      } else {
        console.error('Erro ao excluir produto.');
      }
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Label>
          ID do Produto:
          <Input
            type="text"
            value={productId}
            onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setProductId(event.target.value)}
          />
        </Label>
        <Button type="submit">DELETAR</Button>
      </form>
    </Container>
  );
};

export default DeleteProduct;
