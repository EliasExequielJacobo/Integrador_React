import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { CloseButtonHamburContainerStyled, CloseButtonHamburStyled, MainContainerHamburSty, ModalHamburContainerSty, NavLinkStyHambur } from './ModalHamburSty';

import { FaHome, FaKey, FaIdBadge } from "react-icons/fa";


const ModalHambur = ({hiddenHambur, setHiddenHambur}) => {
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

            <CloseButtonHamburContainerStyled onClick={() => setHiddenHambur(!hiddenHambur)}>
                
                <CloseButtonHamburStyled>
                           x
                </CloseButtonHamburStyled>

            </CloseButtonHamburContainerStyled>
                
            <MainContainerHamburSty>

            <NavLinkStyHambur to="/"> <FaHome /> Home </NavLinkStyHambur>
            <NavLinkStyHambur to="/Ingresar"> <FaKey /> Ingresar </NavLinkStyHambur>
            <NavLinkStyHambur to="/Registrate"> <FaIdBadge /> Registrate </NavLinkStyHambur>

            </MainContainerHamburSty>


            </ModalHamburContainerSty>
            

        )}



    </AnimatePresence>
    
    </>
  )
}

export default ModalHambur