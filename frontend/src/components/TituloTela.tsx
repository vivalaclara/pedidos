import React, { useState } from 'react';
import { styled } from 'styled-components';
import './fontfile.css';

const DivTitulo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const BotaoGithub = styled.button`
height: 30px;
width: 30px;
background-color: #D9D9D9;
font-family: 'Roboto-Bold';
color: black;
font-size: 12px;
border:1px transparent;
border-radius: 50%;
padding:5px;
margin: 5px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

&:hover {
    background-color: #FC56BA;
color: red;}`
const TituloApp = styled.h1`
font-size: 28px;
color: black;
margin:5px;
text-align:center;
font-family: 'Girassol';`

const TituloTela: React.FC = () => {

  return (
    <DivTitulo>
    <a href='https://github.com/vivalaclara'><BotaoGithub>❤</BotaoGithub></a>
    <TituloApp> MINHA LISTA DE PRODUTOS</TituloApp>
    </DivTitulo>
  );
};

export default TituloTela;
