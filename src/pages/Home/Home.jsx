import React from 'react';
import Atencion from '../../assetsImage/img/Atencion.png';
import Ofertas from '../../assetsImage/img/Ofertas.png';
import Pagos from '../../assetsImage/img/Pagos.png';
import styled from 'styled-components';
import  Hero  from '../../assetsImage/img/8BitHero.jpg';
import { BenefitSectionStyle, BenefitContStyle, BenefitCardContStyle, BenefitCardImgStyle, BenefitDescriptionStyle } from "./BenefitStyle";
import { Products } from './ProductsSectStyle';
import ProductsCards from '../../components/Products/ProductsCards';
import ProductCard from '../../components/Products/ProductCard';
import Categories from '../../components/Categories/Categories';
import ContactUs from '../../components/ContactUs/ContactUs';


const HeroContainerStyled = styled.section`

  
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  margin-bottom: 100px;
  margin-top: 120px;

  @media (max-width: 1019px) {
    img {

      display: none;

    }
  }
  
`;

const HeroTextCont = styled.div `
  
 display: flex;
 align-items: start;
 flex-direction: column;

 @media (max-width: 1019px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  /* @media (max-width: 499px) {
    display: none;
  } */

`;


const HeroH1 = styled.h1 `
  
  font-size: 48px;
  width: 80%;
  /* min-width: 500px; */
  font-weight: 800;
  background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;

  @media (max-width: 1019px) {
    width: 60%;
    text-align: center;
    font-size: 35px;
  }

 

   @media (max-width: 499px) {
    width: 50%;
    font-size: 30px;
  } 

`;

const HeroH2 = styled.h2 `
  
  font-size: 17px;
  width: 70%;
  text-align:left;

  @media (max-width: 1019px) {
    text-align: center;
    width: 50%;
    font-size: 20px;
  }

  

  @media (max-width: 499px) {
    width: 40%;
    font-size: 15px;
  } 
  

`;

const ContactSectionSty = styled.section`
  
  display: flex;
	align-items: center;
	justify-content: center;
  flex-direction: column;
	/* flex-direction: column; */
	width: 100%;
	gap: 25px;
	margin-bottom: 100px;
	margin-top: 150px;
  h2 {
        font-size: 30px;
    }

    @media (max-width: 768px) {

    h2 {

      font-size: 25px;

    }
    
    
  }
  
  @media (max-width: 320px) {

    h2 {

      font-size: 20px;

    }
    
  } 

`

const Home = () => {
  return (
    <>
    
    <HeroContainerStyled>

      <HeroTextCont>

      <HeroH1>Bievenido a la tienda de 8 bits jugador</HeroH1>

      <HeroH2>Bienvenido a 8-Bits store, donde traemos los mejores productos 
      y mercancias en video juegos, porfavor mira nuestras ofertas y disfruta de multiples beneficios.</HeroH2>

      </HeroTextCont>

      <img src={ Hero } alt="" />


    </HeroContainerStyled>

    <BenefitSectionStyle>

      <h2>Beneficios</h2>

      <BenefitContStyle>

          <BenefitCardContStyle>

            <BenefitCardImgStyle src= { Atencion } />
            

            <BenefitDescriptionStyle>En 8-bits store le brindamos a nuestros clientes, atencion de froma eficiente y activa, resolveremos tus dudas, invconvenientes 
              y te ayudaremos en todo lo posible para hacer de tu experiencia con nostros la mejor.</BenefitDescriptionStyle>
          </BenefitCardContStyle>

          <BenefitCardContStyle>

          <BenefitCardImgStyle src= { Ofertas } />
          


          <BenefitDescriptionStyle>Aprovecha multiples ofertas todos los días, tambien podras acceder a ofertas exclusivas registrandote en nuestra pagina lo cual te 
            permitira acumular puntos y canjearlos por mas beneficios.</BenefitDescriptionStyle>


          </BenefitCardContStyle>

          <BenefitCardContStyle>

          <BenefitCardImgStyle src= { Pagos } />
          

            <BenefitDescriptionStyle>Brindamos multiples medios de pagos a la hora de comprar, desde pagar en fisico en nuestros locales, 
              depositos o transferecnias bancarias, tarjeta de credito, paypal, tarjetas prepagas y hasta incluso billeteras virtuales.</BenefitDescriptionStyle>

          </BenefitCardContStyle>



      </BenefitContStyle>



    </BenefitSectionStyle>

    <Products>
      <h2> Productos </h2>
      <Categories />
      <ProductsCards />
      

    </Products>


    <ContactSectionSty>

      <h2> Contactanos </h2>
      <ContactUs />


    </ContactSectionSty>

    
    </>
  )
}

export default Home