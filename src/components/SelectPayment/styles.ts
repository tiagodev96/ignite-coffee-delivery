import styled from "styled-components";

interface SelectPaymentProps {
  selected?: boolean;
}

export const SelectPaymentContianer = styled.div<SelectPaymentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: ${(props) =>
    props.selected ? "1px solid var(--purple)" : "1px solid transparent"};
  border-radius: 6px;
  background-color: ${(props) =>
    props.selected ? "var(--purple-light)" : "var(--base-button)"};
  color: var(--base-text);
  padding: 16px;
  width: 178px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${(props) =>
      props.selected ? "var(--purple-light)" : "var(--base-hover)"};
  }

  span {
    font-size: 12px;
    text-transform: uppercase;
  }

  svg {
    color: var(--purple);
  }
`;
