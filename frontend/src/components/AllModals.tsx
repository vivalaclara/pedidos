import React, { useState } from 'react';
import AddProductModal from './AddProductModal';
import EditProductModal from './EditProductModal';
import DeleteProductModal from './DeleteProductModal';
import styled from 'styled-components';
import './fontfile.css'

const DivBotoes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const BotaoAd = styled.button`
width: 100px;
height: 30px;
background-color: #D9D9D9;
font-family: 'Roboto-Bold';
color: black;
font-size: 12px;
border:1px transparent;
border-radius:45px;
padding:5px;
margin: 5px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

&:hover {
    background-color: #66EC84;
    color: white;}
`
const BotaoEd = styled.button`
width: 100px;
height: 30px;
background-color: #D9D9D9;
font-family: 'Roboto-Bold';
color: black;
font-size: 12px;
border:1px transparent;
border-radius:45px;
padding:5px;
margin: 5px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

&:hover {
    background-color: #FDD95A;
    color: white;}
`
const BotaoDe = styled.button`
width: 100px;
height: 30px;
background-color: #D9D9D9;
font-family: 'Roboto-Bold';
color: black;
font-size: 12px;
border:1px transparent;
border-radius:45px;
padding:5px;
margin: 5px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

&:hover {
    background-color:#F84646;
    color: white;}
`

const AllModals: React.FC = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
    const openAddModal = () => {
      setIsAddModalOpen(true);
    };
  
    const openEditModal = () => {
      setIsEditModalOpen(true);
    };
    const openDeleteModal = () => {
      setIsDeleteModalOpen(true);
    };
    const closeAddModal = () => {
      setIsAddModalOpen(false);
    };
  
    const closeEditModal = () => {
      setIsEditModalOpen(false);
    };
    const closeDeleteModal = () => {
      setIsDeleteModalOpen(false);
    };
  
    return (
      <DivBotoes>
        <BotaoAd onClick={openAddModal}>ADICIONAR</BotaoAd>
        <BotaoEd onClick={openEditModal}>EDITAR</BotaoEd>
        <BotaoDe onClick={openDeleteModal}>DELETAR</BotaoDe>
        <AddProductModal isOpen={isAddModalOpen} onClose={closeAddModal} />
        <EditProductModal isOpen={isEditModalOpen} onClose={closeEditModal} />
        <DeleteProductModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} />
      </DivBotoes>
    );
  };
  
  export default AllModals;
  