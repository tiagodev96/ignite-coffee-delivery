import styled from "styled-components";

export const ButtonDefault = styled.button`
  border-radius: 6px;
  padding: 12px 8px;
  color: var(--white);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: var(--yellow);
  transition: all 0.2s ease-in-out;
  border: none;
  cursor: pointer;
  min-width: 132px;

  &:hover {
    background-color: var(--yellow-dark);
  }
`;
