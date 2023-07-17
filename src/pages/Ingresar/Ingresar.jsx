import React from 'react'
import styled from 'styled-components';
import Input from '../../components/UI/Input/Input';
import LogInBtn from '../../components/UI/ButtonForms/LogInBtn';
import { useNavigate } from "react-router-dom";

import { Form as FormikForm } from "formik";
import {Formik, useFormik} from "formik";
import * as Yup from "yup";

const LogInSection = styled.section`
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 350px;

  margin-bottom: 536px;

`

const FormContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

`


const Form = styled(FormikForm)`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

`



const validationSchema = Yup.object({

  
  email: Yup.string().email("Correo no válido").required("Campo requerido"),
  password: Yup.string().min(7, 'Mínimo 7 caracteres').required('Campo requerido'), 


});

const Ingresar = () => {
  const navigate = useNavigate();

  return (
    <>
    <LogInSection>
      
    <FormContainer>


        <Formik
        initialValues= {{
          
          email: "",
          password:"",
          
        }}

        validationSchema={validationSchema}

        onSubmit={(values, {resetForm}) => {
          console.log(values);
          resetForm();
          navigate("/")
        }}
        
        >


        {({ errors, touched }) => (

            <Form>


            
            <Input isError={errors.email & touched.email} name="email" label="Correo electronico" type="email" ></Input>
            <Input isError={errors.password & touched.password} name="password" label="Contraseña" type="password"></Input>

            <LogInBtn />

           </Form>


        )
        
        }



        </Formik>

        


      </FormContainer>

    </LogInSection>
    </>
  )
}

export default Ingresar