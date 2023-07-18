import React, { useState } from 'react'
import logo from "../../assetsImage/img/8BitLogo.png"
import styled from 'styled-components';

import CartIcon from './CartIcon/CartIcon';
import { NavLink } from 'react-router-dom';
import { CartNavStyled, MenuHamburNavStyled } from './NavbarStyle';
import ModalCart from './ModalCart/ModalCart';
import ModalHambur from './ModalHambur/ModalHambur';
import MenuHamburIcon from './MenuHamburIcon/MenuHamburIcon';



const NavbarContainer = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
  height: 60px;
  /* padding-left: 850px; */
  padding: 30px 50px ;
  margin-bottom: 50px;
  gap: 30px;
  z-index: 1;
  top: 0;
  width: 100%;
  position: fixed;
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
  
    @media (max-width: 1019px) {
    display: none;
  }

  
`;


const LogoSty = styled.img`

height: 50px;

`

const Navbar = () => {

  const [hiddenHambur, setHiddenHambur] = useState(true);


  return (
   
    
    <NavbarContainer>
        <ModalHambur hiddenHambur={hiddenHambur} setHiddenHambur={setHiddenHambur} />
        <ModalCart />

        <LogoSty src={ logo } alt="8 bit logo" />
      
        

        <LinkContainer>
              
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/Ingresar">Ingresar</NavLinkStyled>
            <NavLinkStyled to="/Registrate">Registrate</NavLinkStyled>


            <MenuHamburNavStyled>

              <MenuHamburIcon hiddenHambur={hiddenHambur} setHiddenHambur={setHiddenHambur} />

            </MenuHamburNavStyled>

            <CartNavStyled>

              <CartIcon />

            </CartNavStyled>

            

        </LinkContainer>

    </NavbarContainer>
  )
}

export default Navbar