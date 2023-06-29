import styled from 'styled-components';


export const ProductsCategoriesCont = styled.div`

	display: flex;
	align-items: center;
	justify-content: center;
	width: 60%;
	gap: 20px;
	margin-bottom: 20px;
	
`;

export const ProductsCategory = styled.button`

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	padding: 5px;
	border-radius: 10px;
	width: 100px;
    height: 40px;
	font-weight: 600;
	background-color: ${({active}) => active ? "purple" : "#333399"} ;
	color: white;
	border: none;
	cursor: pointer;
`;