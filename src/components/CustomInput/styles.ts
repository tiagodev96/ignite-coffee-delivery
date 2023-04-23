import styled from "styled-components";

export const CustomInputContainer = styled.input`
  border-radius: 4px;
  padding: 12px;
  height: 42px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  color: var(--base-text);
  border: 1px solid transparent;
  background-color: var(--base-input);

  &::placeholder {
    color: var(--base-label);
  }

  &:focus {
    border: 1px solid var(--yellow-dark);
    outline: none;
  }
`;
