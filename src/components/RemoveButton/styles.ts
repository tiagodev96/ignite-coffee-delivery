import styled from "styled-components";

export const RemoveButtonComponent = styled.button`
  display: flex;
  gap: 4px;
  background-color: var(--base-button);
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 6px;
  border: transparent;
  min-width: 91px;
  cursor: pointer;
  color: var(--purple);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--base-hover);
  }

  p {
    color: var(--base-text);
    text-transform: uppercase;
    font-size: 12px;
  }
`;
