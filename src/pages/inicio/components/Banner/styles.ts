import styled from "styled-components";
import BannerBackground from "@/assets/images/banner-background.svg";

export const BannerContainer = styled.div`
  padding: 90px 160px;
  display: flex;
  justify-content: space-between;
  background-image: url(${BannerBackground.src});
`;

export const BannerContent = styled.div`
  max-width: 600px;

  & > h1 {
    font-size: 3rem;
    font-family: "Baloo 2", cursive;
    line-height: 3.9rem;
    margin-bottom: 16px;
    color: var(--base-title);
    font-weight: 800;
  }

  & > p {
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: var(--base-subtitle);
    margin-bottom: 66px;
  }
`;

export const BannerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  max-width: 100%;
`;

export const BannerImage = styled.img`
  width: 476px;
  max-width: 100%;
`;
