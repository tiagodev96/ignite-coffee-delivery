import { useState } from "react";
import { SelectPaymentContianer } from "./styles";
import { CreditCard } from "@phosphor-icons/react";

export function SelectPayment() {
  const [isSelected, setIsSelected] = useState(false);

  function handleSelect() {
    setIsSelected((prevState) => !prevState);
  }

  return (
    <SelectPaymentContianer selected={isSelected} onClick={handleSelect}>
      <CreditCard size={16} weight="regular" />
      <span>Cartão de Crédito</span>
    </SelectPaymentContianer>
  );
}
