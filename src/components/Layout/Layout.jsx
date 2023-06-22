import React from 'react'
import styled from "styled-components"
import Navbar from "../Navbar/Navbar"

const LayoutContainerStyled = styled.div`
  
  height: calc(100vh - 120px);
	margin: 0 auto;
  
  & p {
    text-align: center;
  }
`;

const ContentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

const Layout = ({children}) => {
  return (

    <LayoutContainerStyled>

        <Navbar />
        <ContentContainerStyled>{children}</ContentContainerStyled>

    </LayoutContainerStyled>

  )
}

export default Layout