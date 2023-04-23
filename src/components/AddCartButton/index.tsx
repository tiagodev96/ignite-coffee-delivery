import { ShoppingCartSimple } from "@phosphor-icons/react";
import { ShoppingCartButton } from "./styles";

export function AddCartButton() {
  return (
    <ShoppingCartButton>
      <ShoppingCartSimple size={22} weight="fill" />
    </ShoppingCartButton>
  );
}
