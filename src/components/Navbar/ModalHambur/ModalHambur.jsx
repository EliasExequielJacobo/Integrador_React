import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { CloseButtonHamburContainerStyled, CloseButtonHamburStyled, MainContainerHamburSty, ModalHamburContainerSty, NavLinkStyHambur, NavLinkStyHamburExit } from './ModalHamburSty';
import { useDispatch, useSelector } from 'react-redux';


import { FaHome, FaKey, FaIdBadge } from "react-icons/fa";
import { toggleHambur } from '../../../Redux/HamburRedux/hamburSlice';
import { setCurrentUser } from '../../../Redux/user/userSlice';




const ModalHambur = () => {
  
  const currentUser = useSelector(state => state.user.currentUser)
  const hiddenHambur = useSelector (state => state.hambur.hiddenHambur)
  const dispatch = useDispatch();

  return (
    <>
    
    <AnimatePresence>
        {!hiddenHambur && (
            <ModalHamburContainerSty
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ duration: 0.5 }}
            key='menu-hambur'
            >

            <CloseButtonHamburContainerStyled onClick={() => dispatch(toggleHambur())}>
                
                <CloseButtonHamburStyled>
                           x
                </CloseButtonHamburStyled>

            </CloseButtonHamburContainerStyled>
                
            <MainContainerHamburSty>

            <NavLinkStyHambur to="/"> <FaHome /> Home </NavLinkStyHambur>
            {currentUser ? `${currentUser.nombre}` : <NavLinkStyHambur to="/Ingresar"> <FaKey /> Ingresar </NavLinkStyHambur>}
            {currentUser ? <div>Mis compras</div>  : <NavLinkStyHambur to="/Registrate"> <FaIdBadge /> Registrate </NavLinkStyHambur>}
            <NavLinkStyHamburExit to="/">{currentUser ? <div><span onClick={() =>{dispatch(setCurrentUser(null))}}>Cerrar sesion</span></div> : null}</NavLinkStyHamburExit>

            </MainContainerHamburSty>


            </ModalHamburContainerSty>
            

        )}



    </AnimatePresence>
    
    </>
  )
}

export default ModalHambur