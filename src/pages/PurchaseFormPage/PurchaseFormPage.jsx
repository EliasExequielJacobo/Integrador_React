import React from 'react'
import styled from 'styled-components';

import PurchaseForm from '../../components/PurchaseForm/PurchaseForm'

import { useSelector } from 'react-redux';
import useRedirectPurchase from '../../components/Hooks/useRedirectPurchase';



const ContainerPurchaseFormPageStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 5rem;
`;


const PurchaseFormPage = () => {

    const { cartItems } = useSelector(state => state.cart)

    useRedirectPurchase("/Ingresar")

    const total = cartItems.reduce((acc, item) =>{
      return (acc += item.price * item.quantity)
  }, 0)

  return (


    <div>
        <ContainerPurchaseFormPageStyled>
            <PurchaseForm
              cartItems={cartItems} 
              total={total}
            />
        </ContainerPurchaseFormPageStyled>
    </div>


  );
};

export default PurchaseFormPage