import styled from "styled-components";

export const ProductCardContainer = styled.div`
  background-color: var(--base-card);
  width: 256px;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  user-select: none;

  h2 {
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-family: "Baloo 2", cursive;
    color: var(--base-subtitle);
    margin-bottom: 8px;
  }

  & > p {
    text-align: center;
    font-size: 0.875rem;
    line-height: 130%;
    color: var(--base-label);
    margin-bottom: 33px;
  }
`;

export const ProductImage = styled.img`
  width: 120px;
  height: 120px;
  margin-top: -40px;
  margin-bottom: 12px;
`;

export const ProductTag = styled.span`
  padding: 4px 8px;
  background-color: var(--yellow-light);
  text-transform: uppercase;
  color: var(--yellow-dark);
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  border-radius: 100px;
  width: 81px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const ProductInfo = styled.div`
  display: flex;
  gap: 23px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--base-text);

  span {
    font-size: 0.875rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Baloo 2", cursive;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
`;
