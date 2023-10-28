import { useSelector } from "react-redux";
import CardMisCompras from "./CardMisCompras";
import { MisComprasContainerStyled } from "./CardMisComprasStyles";

import Loader from "../UI/Loader/Loader";

const CardsMisCompras = () => {
    const {orders, loading, error} = useSelector(state => state.orders);

    if (loading && !orders) {
        return <Loader styles={{ height: '50px', width: '50px' }} />
    };

    if (error) {
        return <h2 style={{ textAlign: 'center' }} > {error} </h2>
    }

    return (
        <MisComprasContainerStyled>
            {
                orders?.length ? (
                    orders.map((order) =>{
                        return <CardMisCompras {...order} key={order._id} />
                    })
                ) : (
                    <h2>¿Aun no has hecho una compra? Visita la seccion home para realizar tus compras</h2>
                )
            }
            
        </MisComprasContainerStyled>
    );
};

export default CardsMisCompras;