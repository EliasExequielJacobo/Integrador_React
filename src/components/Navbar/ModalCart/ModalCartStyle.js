import styled from 'styled-components';
import { motion } from 'framer-motion';


export const ContainerStyled = styled(motion.div)`

  position: absolute;
  top:  calc(28px + 2rem);
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  width: 450px;
  height: calc(90vh - 1rem);
  padding: 2rem;
  background-color: black;
  border: 1px solid purple;
  border-top: none;
  border-radius: 0 0 0 1rem;
  
  @media (max-width: 450px) {

    width: 300px;

  } 

`;

export const CloseButtonContainerStyled = styled.div`

  height: 32px;

`;

export const CloseButtonStyled = styled(motion.button)`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: purple;
  color: white;
  cursor: pointer;

`;

export const TitleStyled = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 2rem 0;
  & h1 {
    margin-top: 0;
  }

  @media (max-width: 768px) {

  h1 {

    font-size: x-large;
    font-weight: 600 ;

  }

}


  @media (max-width: 450px) {

    h1 {

      font-size: large;
      font-weight: 500 ;

    }

  }  

`;

export const MainContainerStyled = styled.div`

  height: 55%;

`;


export const ProductsWrapperStyled = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 400px;
  margin: 0 auto;
  padding: 1rem;
  padding-left: 0;
  overflow: scroll;
  &::-webkit-scrollbar {
     background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 235px;
  }

  @media (max-width: 450px) {

    width: 90%;

  } 

`;

export const PriceContainerStyled = styled.div`

  z-index: 1000;
  background-color: var(--gray-bg);
  & p {
    text-align: center;
    margin-bottom: 0;
  }

`;

export const TotalPrice = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const ButtonContainerStyled = styled(TotalPrice)`

  justify-content: center;
  gap: 10px;

`;

export const CartBuyBtn = styled.button`
	
    border-color: transparent;
	  border-radius: 10px;
    background: #333399;
    font-size: 15px;
    font-weight: 800;
    padding: 5px 10px;
    color: whitesmoke;
    cursor: pointer;
    &:disabled {
		cursor: not-allowed;
		color: gray;
	  };

    @media (max-width: 450px) {

     font-size: 12px;

    };



`;

export const CartDeletBtn = styled.button`
	
    border-color: transparent;
	  border-radius: 10px;
    background: #B73239;
    font-size: 15px;
    font-weight: 800;
    padding: 5px 10px;
    color: whitesmoke;
    cursor: pointer;
    &:disabled {
		cursor: not-allowed;
		color: gray;
	}
   
  @media (max-width: 450px) {

   font-size: 12px;

  };

`;

// ---------------------------------------------------------------------------

// ProductCartStyles

export const ProductCardCartContainerSty = styled.div `

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 13px;
  width: 360px;
  background: #f1f1;
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }

  @media (max-width: 450px) {

    flex-direction: column;
    width: 175px;

  } 

`;

export const CartCardTextContainerStyled = styled.div `

  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 190px;

`;

export const CartCardTitleStyled = styled.h3 `

  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
  text-align: center;

`;



export const CartCardPriceStyled = styled.span`

  font-weight: 800;
  font-size: 17px;
  color: whitesmoke;
  text-align: center;

`;

export const CardQuantityContainerSty = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

`;

export const CartCardBtn = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 23px;
  background: #333399;
  border: none;
  border-radius: 29px ;
  font-size: 14px;
  font-weight: 800;
  color: white;
  cursor: pointer;

`;




export const CartCardCountSty = styled.span`

  width: 22px;
  padding: 3px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  
`;