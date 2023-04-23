import styled from "styled-components";

export const ProductOnCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 4px;
  width: 368px;
  background-color: var(--base-card);
  user-select: none;

  .price {
    font-weight: 700;
    color: var(--base-text);
    font-size: 1rem;
    line-height: 130%;
  }
`;

export const ProductActions = styled.div`
  display: flex;
  gap: 20px;
`;

export const ProductImage = styled.img`
  width: 64px;
  height: 64px;
`;

export const ProductSubInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font-size: 1rem;
    line-height: 1.3rem;
    font-weight: 400;
  }

  .subinfo-flex {
    display: flex;
    gap: 8px;
  }
`;
