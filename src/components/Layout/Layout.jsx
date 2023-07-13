import React from 'react'
import styled from "styled-components"
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { LuTwitter } from "react-icons/lu";
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

const FooterStyled = styled.footer`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
  background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
  p {
    font-size: 20px;
  }
	
	gap: 10px;
	font-weight: 600;
	padding: 10px;
`;

const UlStlyed = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
  font-size: large;
	gap: 10px;
`;


const Layout = ({children}) => {
  return (

    <LayoutContainerStyled>

        <Navbar />
        <ContentContainerStyled>{children}</ContentContainerStyled>

        <FooterStyled>
          <p>Redes Sociales</p>
          <UlStlyed>
            <BsInstagram style={{ cursor:"pointer" }} />
            <AiOutlineFacebook style={{ cursor:"pointer" }} />
            <LuTwitter style={{ cursor:"pointer" }} />
          </UlStlyed>

        </FooterStyled>



    </LayoutContainerStyled>

  )
}

export default Layout