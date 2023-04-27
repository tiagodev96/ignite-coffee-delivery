import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import {
  BannerContainer,
  BannerContent,
  BannerGrid,
  BannerImage,
} from "./styles";
import { IconItem } from "./components/IconItem";
import BannerImageSVG from "@/assets/images/banner-image.svg";

export function Banner() {
  const iconItems = [
    {
      name: "ShoppingCart",
      text: "Compra simples e segura",
    },
    {
      name: "Package",
      text: "Embalagem mantém o café intacto",
    },
    {
      name: "Timer",
      text: "Entrega rápida e rastreada",
    },
    {
      name: "Coffee",
      text: "O café chega fresquinho até você",
    },
  ];

  return (
    <BannerContainer>
      <BannerContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <BannerGrid>
          {iconItems.map((iconItem) => (
            <IconItem name={iconItem.name} text={iconItem.text} />
          ))}
        </BannerGrid>
      </BannerContent>
      <BannerImage src={BannerImageSVG.src} />
    </BannerContainer>
  );
}
