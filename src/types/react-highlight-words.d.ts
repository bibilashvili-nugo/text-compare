declare module "react-highlight-words" {
  import { ComponentType } from "react";

  interface Props {
    searchWords: string[];
    textToHighlight: string;
    autoEscape?: boolean;
    caseSensitive?: boolean;
    highlightClassName?: string;
    highlightStyle?: React.CSSProperties;
    sanitize?: (text: string) => string;
  }

  const Highlighter: ComponentType<Props>;
  export default Highlighter;
}
