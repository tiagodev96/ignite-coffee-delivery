import {
  ActionsContainer,
  PriceContainer,
  ProductCardContainer,
  ProductImage,
  ProductInfo,
  ProductTag,
} from "./styles";
import { AmountSelect } from "../AmountSelect";
import { AddCartButton } from "../AddCartButton";

interface ProductInterface {
  src: string;
  tag: string;
  title: string;
  description: string;
  price: number;
}

type Props = {
  product: ProductInterface;
};

export function ProductCard({ product }: Props) {
  const { src, tag, title, description, price } = product;

  let priceFormatted = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <ProductCardContainer>
      <ProductImage src={src} />
      <ProductTag>{tag}</ProductTag>
      <h2>{title}</h2>
      <p>{description}</p>
      <ProductInfo>
        <PriceContainer>
          <span>R$</span>
          <p>{priceFormatted}</p>
        </PriceContainer>
        <ActionsContainer>
          <AmountSelect />
          <AddCartButton />
        </ActionsContainer>
      </ProductInfo>
    </ProductCardContainer>
  );
}
