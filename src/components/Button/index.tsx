import { ReactNode } from "react";
import { ButtonDefault } from "./styles";

type ButtonProps = {
  children: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return <ButtonDefault>{children}</ButtonDefault>;
}
