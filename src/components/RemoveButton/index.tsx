import { RemoveButtonComponent } from "./styles";
import { Trash } from "@phosphor-icons/react";

export function RemoveButton() {
  return (
    <RemoveButtonComponent>
      <Trash size={16} weight="light" />
      <p>Remover</p>
    </RemoveButtonComponent>
  );
}
