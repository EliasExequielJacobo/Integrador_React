import React from 'react'
import { ErrorSty, InputDivSty, InputLabelSty, InputSty } from './InputStyled'
import { ErrorMessage, Field } from "formik";

const Input = ({label, type, name}) => {
  return (
    <>
    
    <InputDivSty>
    
        <InputLabelSty htmlFor={label}>{label}</InputLabelSty>
        <Field 

         name={name}
         type={type}
         id={label}
         as={InputSty}

        />


        <ErrorMessage 
         name={name}
         component={ErrorSty}
        
        />
    
    </InputDivSty>
    
    </>
  )
}

export default Input