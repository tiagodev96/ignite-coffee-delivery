import { AmountSelect } from "../AmountSelect";
import { RemoveButton } from "../RemoveButton";
import {
  ProductActions,
  ProductImage,
  ProductOnCartContainer,
  ProductSubInfo,
} from "./styles";

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

export function ProductOnCart({ product }: Props) {
  const { src, title, price } = product;

  let formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <ProductOnCartContainer>
      <ProductActions>
        <ProductImage src={src} />
        <ProductSubInfo>
          <h2>{title}</h2>
          <div className="subinfo-flex">
            <AmountSelect />
            <RemoveButton />
          </div>
        </ProductSubInfo>
      </ProductActions>
      <p className="price">{formattedPrice}</p>
    </ProductOnCartContainer>
  );
}
