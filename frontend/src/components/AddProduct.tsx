import React, { useState } from 'react';
import styled from 'styled-components';
import './fontfile.css'

//styled components de modal
const Form = styled.form`
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
    background-color:#66EC84;
    color: white;}
`;

//componente a ser exportado para ficar dentro do modal
const AddProduct: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [availableToBuy, setAvailableToBuy] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProduct = {
      name,
      description,
      price,
      available_to_buy: Boolean(availableToBuy)
    };

    console.log('JSON enviado:', JSON.stringify(newProduct));
   //requisição http
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      });

      if (response.ok) {
        console.log('Produto adicionado com sucesso!');
        // Limpar os campos do formulário
        setName('');
        setDescription('');
        setPrice('');
        setAvailableToBuy(false);
      } else {
        const errorData = await response.json();
        console.error('Erro ao adicionar produto:', errorData.error);
      }
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Nome:
        <Input
          type="text"
          value={name}
          onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setName(event.target.value)}
        />
      </Label>
      <Label>
        Descrição:
        <Input
          type="text"
          value={description}
          onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setDescription(event.target.value)}
        />
      </Label>
      <Label>
        Preço:
        <Input
          type="text"
          value={price}
          onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setPrice(event.target.value)}
        />
      </Label>
      <Label>
        Disponibilidade:
        <Input
          type="checkbox"
          checked={availableToBuy}
          onChange={(event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) =>
            setAvailableToBuy(event.target.checked)
          }
        />
      </Label>
      <Button type="submit">ADICIONAR</Button>
    </Form>
  );
};

export default AddProduct;
