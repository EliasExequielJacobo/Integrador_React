import styled from 'styled-components';


 export const BenefitSectionStyle = styled.section `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 100px;
    gap: 25px;
    h2 {
        font-size: 30px;
    }
`;

export const BenefitContStyle = styled.div `

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 90%;
    flex-wrap: wrap;
`;

export const BenefitCardContStyle = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    background: #f1f1;
    padding: 10px;
    height: 325px;
    width: 300px;


`;

export const BenefitCardImgStyle = styled.img `

    width: 33%;
    border: 5px solid rebeccapurple;
    border-radius: 50px;
    background: rebeccapurple;

`;

export const BenefitDescriptionStyle = styled.p `

    font-size: 15px;
    font-weight: 500;
    justify-content: center;

`


