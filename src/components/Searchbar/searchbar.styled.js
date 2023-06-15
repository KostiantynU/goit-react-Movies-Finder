import styled from 'styled-components';
export const WrapperForm = styled.form`
  display: flex;
  gap: 10px;
`;
export const StyledInput = styled.input`
  width: 40vw;
  padding: 5px 10px;
  background-color: rgb(232, 247, 250);
  border-radius: 4px;
  border: 1px solid rgb(73, 203, 230);
  &:focus-within {
    outline: none;
  }
`;
export const StyledButton = styled.button`
  padding: 10px 15px;
  border-radius: 4px;
  border: none;
  background: rgb(73, 203, 230);
  &:hover,
  &:focus {
    background: rgb(165, 235, 250);
    color: rgb(6, 76, 92);
  }
`;
