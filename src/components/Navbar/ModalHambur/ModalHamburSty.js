import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const ModalHamburContainerSty = styled(motion.div)`

  position: absolute;
  background: linear-gradient(15deg,  #e38de3 3%, #f64f59 97%);
  width: 200px;
  top:  calc(28px + 2rem);
  right: 0;
  z-index: 98;
  border-radius: 0 0 0 1rem;
  padding: 2rem;

`;


export const MainContainerHamburSty = styled.div`

  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: start;
  flex-direction: column;
  /* height: 55%; */

`;

export const NavLinkStyHambur = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    color: #4747ff;
    font-weight: 600;}

  
`;

export const NavLinkStyHamburExit = styled(NavLink)`
  color: rgb(178,34,34);
  text-decoration: none;
  /* &.active {
    color: #4747ff;
    font-weight: 600;} */

  
`;

export const VerifyHamburNavStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  /* &.active {
    color: rgb(178,34,34);
    font-weight: 600;} */
  
   
  
`;

export const CloseButtonHamburContainerStyled = styled.div`

  display: flex;
  justify-content: flex-end;
  height: 32px;

`;

export const CloseButtonHamburStyled = styled(motion.button)`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: purple;
  color: white;
  cursor: pointer;

`;

