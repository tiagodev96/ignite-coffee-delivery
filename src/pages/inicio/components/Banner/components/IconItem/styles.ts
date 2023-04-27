import styled from "styled-components";

export const IconItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-start;

  .icon-elipse {
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 50%;

    svg {
      color: var(--background);

      P {
        font-size: 1rem;
        color: var(--base-text);
        line-height: 1.3rem;
      }
    }
  }

  .icon1 {
    background-color: var(--yellow-dark);
  }

  .icon2 {
    background-color: var(--base-text);
  }

  .icon3 {
    background-color: var(--yellow);
  }

  .icon4 {
    background-color: var(--purple);
  }
`;
