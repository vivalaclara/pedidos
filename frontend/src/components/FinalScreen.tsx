import React, { useState } from 'react';
import AllModals from './AllModals';
import TituloTela from './TituloTela';
import ProductList from './ProductList';
import { styled } from 'styled-components';
const DivTela = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
const FinalScren: React.FC = () => {

  return (
    <DivTela>
     <TituloTela></TituloTela>
      <AllModals></AllModals>
      <ProductList></ProductList>
    </DivTela>
  );
};

export default FinalScren;
