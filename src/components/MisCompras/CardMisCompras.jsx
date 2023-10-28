import { formatDate } from '../../utils/formatDate';
import { formatPrice } from '../../utils/formatPrice';
import OrderStatus from '../UI/OrderStatus/OrderStatus';

import { IdStyled, PedidoContainerStyled, PriceStyled, TextContainerStyled, TitleStyled } from './CardMisComprasStyles';

const CardMisCompras = ({createdAt, status, total, _id}) => {
    return (
        <PedidoContainerStyled>
            <TextContainerStyled>
                <TitleStyled>ID de la compra: {_id.slice(0, 7)}</TitleStyled>
                <IdStyled>Fecha {formatDate(createdAt)}</IdStyled>
                <PriceStyled>{formatPrice(total)}</PriceStyled>
            </TextContainerStyled>
            <OrderStatus status={status} />
        </PedidoContainerStyled>
    );
};

export default CardMisCompras;
