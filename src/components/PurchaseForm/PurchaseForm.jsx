import React from 'react'
import styled from 'styled-components';
import Input from '../UI/Input/Input';
import SubmitBtn from '../UI/ButtonForms/SubmitBtn';
import * as Yup from "yup";

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { borrarCarrito } from '../../Redux/cart/cartSlice';
import { Form as FormikForm } from "formik";
import {Formik, useFormik} from "formik";
import { createOrder } from '../../axios/axiosOrders';


const PurchaseFormSection = styled.section`
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 350px;

  margin-bottom: 536px;

`

const PurchaseFormContainer = styled.div`
  
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
    name: Yup.string().required('Campo requerido'),
    cellphone: Yup.string().required('Campo requerido'),
    location: Yup.string().required('Campo requerido'),
    address: Yup.string().required('Campo requerido'),
  });



const PurchaseForm = ({cartItems, price}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user);




  return (
    <>
    
    <PurchaseFormSection>

        <PurchaseFormContainer>

            
            <Formik
            initialValues= {{
                name: '',
                cellphone: '',
                location: '',
                address: '',
            }}

            validationSchema= { validationSchema }
            
            onSubmit={ async (values) => {
              const orderData = {
                items: cartItems,
                price,
                total: price,
                shippingDetails: {
                  ...values
                }
              };

              try {
                await createOrder(orderData, dispatch, currentUser);
                // alert("Compra exitosa, muchas gracias, puedes ver el estado de tu pedido en Mis Compras");
                navigate("/")
                dispatch(borrarCarrito());
              } catch (error) {
                console.log(error);
                alert("Error al realizar la compra")
              }

            } }
            
            >
            {({ errors, touched }) => (

            <Form>


            <Input isError={errors.name & touched.name} name="name" label="Nombre de usuario" type="text" ></Input>
            <Input isError={errors.cellphone & touched.cellphone} name="cellphone" label="cellphone" type="text" ></Input>
            <Input isError={errors.location & touched.location} name="location" label="location" type="text" ></Input>
            <Input isError={errors.address & touched.address} name="address" label="address" type="text" ></Input>
            
            <SubmitBtn disabled={!cartItems.length} />
            

            </Form>


            )

            }


              




            </Formik>

        </PurchaseFormContainer>

    </PurchaseFormSection>

    </>
  )
}

export default PurchaseForm