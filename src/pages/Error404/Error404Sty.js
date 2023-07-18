import styled from 'styled-components';

export const ErrorNotFoundSection = styled.section`
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 350px;

  margin-bottom: 536px;

`


export const ErrorNotFoundContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  
  img {

        width: 250px;

        @media (max-width: 320px) {

            width: 220px;


        };   

  };

  p {

    color: white;
    font-size: x-large;

    @media (max-width: 320px) {

       font-size: large ;


    };

  };

  

`