import styled from "styled-components";

export const ContactCard = styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* gap: 150px; */
    background-color: #f1f1;
    padding: 50px 25px;
    border-radius: 10px;

    img{
        
        border-radius: 10px;
	    width: 40%;

    }
`
export const ContactCardTextCont = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    
    

`

export const ContacUsUl = styled.ul`

    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    color: white;
    font-size: large;
    font-weight: 700;

`
