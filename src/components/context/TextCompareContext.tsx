import { createContext, useContext, useState, type ReactNode } from "react";

interface TextCompareContextType {
  text1: string;
  text2: string;
  setText1: (val: string) => void;
  setText2: (val: string) => void;
  resetTexts: () => void;
}

const TextCompareContext = createContext<TextCompareContextType | undefined>(
  undefined
);

export const TextCompareProvider = ({ children }: { children: ReactNode }) => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const resetTexts = () => {
    setText1("");
    setText2("");
  };

  return (
    <TextCompareContext.Provider
      value={{ text1, text2, setText1, setText2, resetTexts }}
    >
      {children}
    </TextCompareContext.Provider>
  );
};

export const useTextCompare = () => {
  const context = useContext(TextCompareContext);
  if (!context)
    throw new Error("useTextCompare must be used within TextCompareProvider");
  return context;
};
