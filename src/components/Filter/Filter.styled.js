import styled from 'styled-components';

export const FilterWrapper = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FilterInput = styled.input`
  width: 200px;
  border: 1px solid #ccc;
  padding: 4px;
  font-size: 16px;
  outline: none;
  margin: 8px 0 28px;

  &:focus {
    outline: 2px solid rgb(96, 192, 255, 0.7);
    border-radius: 4px;
  }
`;
