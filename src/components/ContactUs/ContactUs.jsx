import React from 'react'
import { ContacUsUl, ContactCard, ContactCardTextCont } from './ContactUsSty'
import { FaMapMarkerAlt, FaPhone, FaRegEnvelope, FaHouseUser } from "react-icons/fa";


const ContactUs = () => {
  return (
    <>
    
    <ContactCard>

      <ContactCardTextCont>

        <ContacUsUl>

        <li>Springfield, Ciudad ficticia</li>
        <li> <FaMapMarkerAlt /> Calle falsa 123 </li>
        <li> <FaPhone /> 1234567 </li>
        <li> <FaRegEnvelope /> 8bitsemail@email.com </li>
        <li> <FaHouseUser /> Dueño: Max Power</li>

        </ContacUsUl>

      </ContactCardTextCont>

      <img src='https://i.insider.com/5c47560d2bdd7f3c093140eb?width=700' />

    </ContactCard>
    
    
    
    </>
  )
}

export default ContactUs