import React from 'react'
import styled from 'styled-components';
import Input from '../../components/UI/Input/Input';
import { useNavigate } from "react-router-dom";
import SubmitBtn from '../../components/UI/ButtonForms/SubmitBtn'

import { Form as FormikForm } from "formik";
import {Formik, useFormik} from "formik";
import * as Yup from "yup";
import { verifyUser } from '../../axios/axiosVerify';

const VerifySection = styled.section`
  
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

const RecordtorioCode = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  color: white;
  opacity: 0.2;
  

`

const Form = styled(FormikForm)`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

`
const VerifyTitle = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

`



const validationSchema = Yup.object({

    email: Yup.string().email("Correo no válido").required("Campo requerido"),
    code: Yup.string().required('Campo requerido'), 
    
  
  });
  



const Verify = () => {
    const navigate = useNavigate();


  return (
    <>
    
    <VerifySection>

    <FormContainer>

    <Formik
    initialValues= {{
        email:"",
        code:"",
        
      }}
    
    validationSchema= {validationSchema}

    onSubmit={ async (values, actions) =>{
        const code = await verifyUser( values.email ,values.code);
        actions.resetForm();
        if(code){
            alert("Te has verificado con exito")
            navigate("/")
        }
    } }
      
    >

    {({ errors, touched }) => (

    <Form>


    <VerifyTitle><h2>Verficica tu cuenta aqui porfavor</h2></VerifyTitle>
    <Input isError={errors.email & touched.email} name="email" label="Correo electronico" type="email" ></Input>
    <Input isError={errors.code & touched.code} name="code" label="Code" type="text"></Input>
    <SubmitBtn />
    <RecordtorioCode><h3> *El codigo de verficiacacion se envio a su email con el que se registro,
      de no econtrarse en la bandeja de entrada, revisar la seccion de spam.</h3> </RecordtorioCode>

    </Form>


    )

    }


    </Formik>



    </FormContainer>


    </VerifySection>
    
    
    </>
  )
}

export default Verify