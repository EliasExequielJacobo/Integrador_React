import styled from 'styled-components';

export const ProductsContainer = styled.div`

	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	width: 1000px;
	max-width: 1200px;
	gap: 20px;
    
`;

export const ProductsCard = styled.div `

    display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 250px;
	height: 353px;
	background-color: #f1f1;
	gap: 7px;
	border-radius: 10px;
	padding: 10px;
    
`

export const ProductsImage = styled.img`

	width: 95%;
	height: 220px;
	border-radius: 10px;


`;

export const ProductsName = styled.h3`
	font-size: 20px;
	font-weight: 600;
	color: white;
`;

export const ProductsInfoCont = styled.div`
	display: flex;
    flex-direction: column;
	align-items: center;
	gap: 10px;
	width: 90%;
    

    p {
        font-size: 13px;
        font-weight: 400;
        color: white;
    }
`;

export const ProductsPriceCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90%;
`;

export const ProductsPrice = styled.p`
	font-size: 13px;
	font-weight: 600;
    background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

export const ProductsCardButton = styled.button`
	
    border-color: transparent;
	border-radius: 10px;
    background: #333399;
    font-size: 15px;
    font-weight: 800;
    padding: 5px 10px;
    color: whitesmoke;
    cursor: pointer;

`;