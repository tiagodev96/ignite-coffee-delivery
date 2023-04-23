import { useState } from "react";
import { AmountSelectContainer } from "./styles";
import { Minus, Plus } from "@phosphor-icons/react";

export function AmountSelect() {
  const [amount, setAmount] = useState(0);

  function handleAmountChange(type: string) {
    if (type === "minus" && amount > 0) {
      setAmount((prevState) => prevState - 1);
    }

    if (type === "plus") {
      setAmount((prevState) => prevState + 1);
    }
  }

  return (
    <AmountSelectContainer>
      <Minus
        size={14}
        weight="regular"
        onClick={() => handleAmountChange("minus")}
      />
      <span>{amount}</span>
      <Plus
        size={14}
        weight="regular"
        onClick={() => handleAmountChange("plus")}
      />
    </AmountSelectContainer>
  );
}
