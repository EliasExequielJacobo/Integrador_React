import styled from "styled-components";

export const InputDivSty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputLabelSty = styled.label`
  font-size: 1rem;
  display: flex;
`;

export const InputSty= styled.input`

  border: 1px solid #f1f1;
  border-color: #f1f1;
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  background: white;
  color: black;
  outline: none;

`;

export const ErrorSty = styled.span`
  padding-left: 5px;
  color: red;
`;