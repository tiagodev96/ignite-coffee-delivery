import styled from "styled-components";

export const ShoppingCartButton = styled.button`
  background-color: var(--purple-dark);
  border-radius: 8px;
  padding: 8px;
  border: none;
  color: var(--white);
  width: 38px;
  height: 38px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--purple);
  }
`;
