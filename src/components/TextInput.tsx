import { useState } from "react";
import { DoubleArrow } from "../ui/Icons";

const TextInput = () => {
  const [text1, setText1] = useState<string>("");
  const [text2, setText2] = useState<string>("");
  const [isCompared, setIsCompared] = useState<boolean>(false);

  const calculateDiffIndices = (
    base: string,
    compare: string
  ): { start: number; end: number }[] => {
    const diffs: { start: number; end: number }[] = [];
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

  const renderTextareaWithHighlight = (
    text: string,
    setText: (val: string) => void,
    compareText: string
  ) => (
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
        name="text input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="absolute top-0 left-0 w-full h-full p-3 rounded-lg bg-transparent resize-none focus:outline-none font-helvetica text-sm leading-[22px] z-10 text-transparent caret-black"
        placeholder="Type here..."
      />
    </div>
  );

  return (
    <div className="pt-6 flex flex-col items-center font-helvetica lg:px-6">
      <div className="flex flex-col lg:flex-row small:gap-4 md:gap-[10px] w-full pb-8 items-center">
        {renderTextareaWithHighlight(text1, setText1, text2)}
        <div className="small:rotate-90 lg:rotate-180">
          <DoubleArrow />
        </div>
        {renderTextareaWithHighlight(text2, setText2, text1)}
      </div>
      <button
        onClick={() => setIsCompared(true)}
        className="bg-[#383A4899]/60 font-helvetica text-white py-[10px] px-[37px] rounded text-sm leading-[28px]"
      >
        შედარება
      </button>
    </div>
  );
};

export default TextInput;
