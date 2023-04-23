import { useEffect, useState } from "react";
import { CartCount, ShoppingCartComponent } from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";

interface ShoppingCartControlProps {
  cartCount?: number;
}

export function ShoppingCartControl({ cartCount }: ShoppingCartControlProps) {
  const [isCartFilled, setIsCartFilled] = useState(false);

  useEffect(() => {
    if (cartCount && cartCount > 0) {
      setIsCartFilled(true);
    } else {
      setIsCartFilled(false);
    }
  }, [isCartFilled, cartCount]);

  return (
    <ShoppingCartComponent>
      <CartCount filled={isCartFilled}>{cartCount}</CartCount>
      <ShoppingCart size={22} weight="fill" />
    </ShoppingCartComponent>
  );
}
