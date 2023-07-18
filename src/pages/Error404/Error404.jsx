import React from 'react'
import { ErrorNotFoundContainer, ErrorNotFoundSection } from './Error404Sty'

const Error404 = () => {
  return (
    <>
    
    <ErrorNotFoundSection>

        <ErrorNotFoundContainer>

            <img src='https://cdn.iconscout.com/icon/free/png-512/free-404-page-not-found-456876.png?f=avif&w=256'/>
            <p> Error 404 page not found </p>

        </ErrorNotFoundContainer>


    </ErrorNotFoundSection>
    
    </>
  )
}

export default Error404