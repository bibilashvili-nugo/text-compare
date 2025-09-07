import React from "react";
import { diffChars } from "diff";

interface Props {
  text: string;
  onChange: (val: string) => void;
  compareText: string;
  isCompared: boolean;
}

const DiffTextarea: React.FC<Props> = ({
  text,
  onChange,
  compareText,
  isCompared,
}) => {
  const getHighlightedHTML = (text: string, compare: string): string => {
    if (!isCompared) return text;

    // Split texts into words (including spaces)
    const wordRegex = /\S+|\s+/g;
    const textWords = text.match(wordRegex) || [];
    const compareWords = compare.match(wordRegex) || [];

    const maxLength = Math.max(textWords.length, compareWords.length);
    let result = "";

    for (let i = 0; i < maxLength; i++) {
      const tWord = textWords[i] || "";
      const cWord = compareWords[i] || "";

      if (tWord === cWord) {
        result += tWord; // identical word, no highlight
      } else {
        // Highlight differences per character inside this word
        const diffs = diffChars(cWord, tWord);
        diffs.forEach((part) => {
          if (part.added) {
            for (const char of part.value) {
              result += `<mark style="background-color: #21a40050">${char}</mark>`;
            }
          } else if (!part.removed) {
            result += part.value;
          }
          // removed characters are ignored
        });
      }
    }

    return result;
  };

  return (
    <div className="relative w-full h-[190px] md:h-[432px]">
      {/* Highlight overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full p-3 whitespace-pre-wrap break-words pointer-events-none"
        style={{
          background: "#F0F7FF",
          borderRadius: "8px",
          fontFamily: "inherit",
          fontSize: "14px",
          lineHeight: "22px",
        }}
        dangerouslySetInnerHTML={{
          __html: getHighlightedHTML(text, compareText),
        }}
      />

      {/* Transparent textarea */}
      <textarea
        value={text}
        onChange={(e) => onChange(e.target.value)}
        className="absolute top-0 left-0 w-full h-full p-3 rounded-lg bg-transparent resize-none focus:outline-none font-helvetica text-sm leading-[22px] z-10 text-transparent caret-black"
        placeholder="Type here..."
      />
    </div>
  );
};

export default DiffTextarea;
