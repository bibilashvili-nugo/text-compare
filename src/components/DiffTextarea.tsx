import React from "react";

interface DiffRange {
  start: number;
  end: number;
}

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
  const calculateDiffIndices = (base: string, compare: string): DiffRange[] => {
    const diffs: DiffRange[] = [];
    const length = Math.max(base.length, compare.length);
    for (let i = 0; i < length; i++) {
      if (base[i] !== compare[i]) {
        diffs.push({ start: i, end: i + 1 });
      }
    }
    return diffs;
  };

  const getHighlightedHTML = (text: string, compare: string): string => {
    if (!isCompared) return text;
    const diffs = calculateDiffIndices(text, compare);
    let result = "";
    let lastIndex = 0;

    diffs.forEach(({ start, end }) => {
      result += text.slice(lastIndex, start);
      result += `<mark style="background-color: #21a40050">${text.slice(
        start,
        end
      )}</mark>`;
      lastIndex = end;
    });

    result += text.slice(lastIndex);
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
