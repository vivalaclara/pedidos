import ReactModal from 'react-modal';
import AddProduct from './AddProduct';
import './fontfile.css'
import { styled } from 'styled-components';

const TituloModal = styled.h1`
font-size: 20px;
color: black;
margin:1px;
text-align:center;
font-family: 'Girassol';`

const BotaoFechar = styled.button`
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
    background-color:#9747FF;
color: white;}`

// utilizar a biblioteca react modadl p/ configurar raiz
ReactModal.setAppElement('#root'); 

const AddProductModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Adicionar Produto"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          zIndex: 1000
        },
        content: {
          padding: '20px',
          border: 'none',
          borderRadius: '25px',
          maxWidth: '300px',
          maxHeight: '100px;',
          margin: '0 auto',
          textAlign: 'center'
        }
      }}
    >
      <TituloModal>ADICIONAR PRODUTO</TituloModal>
      <AddProduct />
      <BotaoFechar onClick={onClose}>FECHAR</BotaoFechar>
    </ReactModal>
  );
};

export default AddProductModal;
