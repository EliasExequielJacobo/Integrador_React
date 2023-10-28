import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CardsMisCompras from '../../components/MisCompras/CardsMisCompras'

import { MisComprasPageContainerStyled, MisComprasPageTitleStyled } from './MisComprasPageStyles'

import { getOrders } from '../../axios/axiosOrders'
import { clearError, fetchOrdersFail } from '../../Redux/orders/ordersSlice' 

const MisComprasPage = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.user.currentUser);
    const {orders, error} = useSelector(state => state.orders);

    useEffect(() =>{
        if (!orders) {
            getOrders(dispatch, currentUser)
        }
        
        if (!currentUser?.token) {
            dispatch(fetchOrdersFail())
        } else {
            error && dispatch(clearError())
        }
    }, [currentUser, orders, error, dispatch])

  return (
    <>
        <MisComprasPageContainerStyled>
            <MisComprasPageTitleStyled>Mis compras</MisComprasPageTitleStyled>
            <CardsMisCompras />
        </MisComprasPageContainerStyled>
    </>
  );
};

export default MisComprasPage;