import styled from "styled-components";

interface SpanProps {
  filled?: boolean;
}

export const ShoppingCartComponent = styled.button`
  padding: 8px;
  border-radius: 6px;
  background-color: var(--yellow-light);
  color: var(--yellow-dark);
  border: none;
  width: 38px;
  height: 38px;
  cursor: pointer;
  position: relative;
`;

export const CartCount = styled.span<SpanProps>`
  position: absolute;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  color: var(--white);
  background-color: var(--yellow-dark);
  display: ${(props) => (props.filled ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  top: -10px;
  right: -10px;
`;
