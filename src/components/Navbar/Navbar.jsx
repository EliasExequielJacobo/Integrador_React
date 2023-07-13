import React, { useState } from 'react'
import logo from "../../assetsImage/img/8BitLogo.png"
import styled from 'styled-components';

import CartIcon from './CartIcon/CartIcon';
import { NavLink } from 'react-router-dom';
import { CartNavStyled } from './NavbarStyle';
import ModalCart from './ModalCart/ModalCart';



const NavbarContainer = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
  height: 60px;
  /* padding-left: 850px; */
  padding: 0px 50px ;
  margin-bottom: 50px;
`;

const LinkContainer = styled.ul`
  display: flex;
  gap: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    color: #4747ff;
    font-weight: 600;}

  
`;


const LogoSty = styled.img`

height: 50px;

`

const Navbar = () => {

  const [hiddenCart, setHiddenCart] = useState(true);


  return (
   
    
    <NavbarContainer>
        <ModalCart hiddenCart={hiddenCart} setHiddenCart={setHiddenCart} />

        <LogoSty src={ logo } alt="8 bit logo" />
      
        

        <LinkContainer>
              
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/AboutUs">Nostros</NavLinkStyled>
            <NavLinkStyled to="/ContactUs">Contacto</NavLinkStyled>

            <CartNavStyled>

              <CartIcon hiddenCart={hiddenCart} setHiddenCart={setHiddenCart} />

            </CartNavStyled>

        </LinkContainer>

    </NavbarContainer>
  )
}

export default Navbar