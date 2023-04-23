import { useState } from "react";
import { CustomInputContainer } from "./styles";

interface CustomInputProps {
  placeholder: string;
  optional?: boolean;
}

export function CustomInput({ placeholder }: CustomInputProps) {
  const [inputContent, setInputContent] = useState("");

  return (
    <CustomInputContainer
      placeholder={placeholder}
      value={inputContent}
      onChange={(e) => setInputContent(e.target.value)}
    />
  );
}
