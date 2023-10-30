import React, { useState } from 'react'
import logo from "../../assetsImage/img/8BitLogo.png"
import styled from 'styled-components';

import CartIcon from './CartIcon/CartIcon';
import { NavLink } from 'react-router-dom';
import { CartNavStyled, MenuHamburNavStyled } from './NavbarStyle';
import ModalCart from './ModalCart/ModalCart';
import ModalHambur from './ModalHambur/ModalHambur';
import MenuHamburIcon from './MenuHamburIcon/MenuHamburIcon';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../Redux/user/userSlice';



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

const LogOutStyled = styled(NavLink)`
  color: rgb(178,34,34);
  text-decoration: none;
  /* &.active {
    color: rgb(178,34,34);
    font-weight: 600;} */
  
    @media (max-width: 1019px) {
    display: none;
  }

  
`;

const VerifyNavStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    color: #4747ff;
    font-weight: 600;}
  
    @media (max-width: 1019px) {
    display: none;
  }

  
`;

const MisComprasStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    color: #4747ff;
    font-weight: 600;}
  
    @media (max-width: 1019px) {
    display: none;
  }

  
`;

const UserNameStyled = styled.span`
  color: white;
  text-decoration: none;
  
  
    @media (max-width: 1019px) {
    display: none;
  }

  
`;

const LogoSty = styled.img`

height: 50px;

`

const Navbar = () => {

  // const [hiddenHambur, setHiddenHambur] = useState(true);

  const currentUser = useSelector(state => state.user.currentUser)

  const dispatch = useDispatch();


  return (
   
    
    <NavbarContainer>
        <ModalHambur  />
        <ModalCart />

        <LogoSty src={ logo } alt="8 bit logo" />
      
        

        <LinkContainer>
              
            <NavLinkStyled to="/">Home</NavLinkStyled>
            {currentUser ? <UserNameStyled>{currentUser.nombre}</UserNameStyled> : <NavLinkStyled to="/Ingresar">Ingresar</NavLinkStyled>}
            {currentUser ? <MisComprasStyled to="/MisCompras">Mis compras</MisComprasStyled> : <NavLinkStyled to="/Registrate">Registrate</NavLinkStyled>}
            <VerifyNavStyled to="/Verficarse">{currentUser ? <div>Verificarse</div> : null}</VerifyNavStyled>
            <LogOutStyled to="/">{currentUser ? <div><span onClick={() =>{dispatch(setCurrentUser(null))}}>Cerrar sesion</span></div> : null}</LogOutStyled>
            


            <MenuHamburNavStyled>

              <MenuHamburIcon  />

            </MenuHamburNavStyled>

            <CartNavStyled>

              <CartIcon />

            </CartNavStyled>

            

        </LinkContainer>

    </NavbarContainer>
  )
}

export default Navbar