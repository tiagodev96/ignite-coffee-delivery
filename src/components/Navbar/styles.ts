import styled from "styled-components";

export const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px 160px;
`;

export const Logo = styled.img``;

export const LocationAndCartContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  width: 143px;
  height: 38px;
  border-radius: 6px;
  background-color: var(--purple-light);
  color: var(--purple);

  span {
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: var(--purple-dark);
  }
`;
