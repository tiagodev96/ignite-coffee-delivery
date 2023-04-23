import styled from "styled-components";

export const AmountSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 38px;
  background-color: var(--base-button);
  padding: 8px;
  border-radius: 6px;
  gap: 8px;

  span {
    font-size: 16px;
    color: var(--base-title);
    user-select: none;
  }

  svg {
    color: var(--purple);
    cursor: pointer;

    &:hover {
      color: var(--purple-dark);
    }
  }
`;
