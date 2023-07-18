import React from 'react'
import { LinkContainerStyled } from '../NavbarStyle'

import { FaBars } from "react-icons/fa";

const MenuHamburIcon = ({hiddenHambur, setHiddenHambur}) => {
  return (
    <>
    
    <LinkContainerStyled onClick={() => setHiddenHambur(!hiddenHambur)}>
    
        <FaBars />
    
    </LinkContainerStyled>
    
    </>
  )
}

export default MenuHamburIcon