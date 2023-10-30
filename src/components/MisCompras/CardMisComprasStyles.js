import styled from "styled-components";



export const MisComprasContainerStyled = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1500px;
  margin: 0 auto;
`;

export const PedidoContainerStyled = styled.div`
  background: #f1f1;
  width: 380px;
  border-radius: 15px;
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStyled = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`;

export const IdStyled = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const PriceStyled = styled.p`
  font-weight: 800;
  font-size: 2rem;
  background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

  @media (max-width: 760px) {
    font-size: 1.6rem;
  }
`;
