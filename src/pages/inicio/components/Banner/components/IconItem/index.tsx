import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { IconItemContainer } from "./styles";

interface IconItemProps {
  name: string;
  text: string;
}

export function IconItem({ name, text }: IconItemProps) {
  function displayIcon() {
    switch (name) {
      case "ShoppingCart":
        return (
          <div className="icon-elipse icon1">
            <ShoppingCart size={16} weight="fill" />
          </div>
        );
      case "Package":
        return (
          <div className="icon-elipse icon2">
            <Package size={16} weight="fill" />
          </div>
        );
      case "Timer":
        return (
          <div className="icon-elipse icon3">
            <Timer size={16} weight="fill" />
          </div>
        );
      case "Coffee":
        return (
          <div className="icon-elipse icon4">
            <Coffee size={16} weight="fill" />
          </div>
        );

      default:
        break;
    }
  }

  return (
    <IconItemContainer>
      {displayIcon()}
      <p>{text}</p>
    </IconItemContainer>
  );
}
