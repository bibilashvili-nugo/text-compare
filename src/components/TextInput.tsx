import { useState } from "react";

const TextInput = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [isCompared, setIsCompared] = useState(false);

  const calculateDiffIndices = (base: string, compare: string) => {
    const diffs: { start: number; end: number }[] = [];
    const length = Math.max(base.length, compare.length);
    for (let i = 0; i < length; i++) {
      if (base[i] !== compare[i]) {
        diffs.push({ start: i, end: i + 1 });
      }
    }
    return diffs;
  };

  const getHighlightedHTML = (text: string, compare: string) => {
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
    <div className="relative w-full">
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
        onChange={(e) => setText(e.target.value)}
        className="w-full h-[190px] md:h-[432px] p-3 rounded-lg bg-transparent resize-none focus:outline-none font-helvetica text-sm leading-[22px]"
        placeholder="Type here..."
      />
    </div>
  );

  return (
    <div className="space-y-4">
      {renderTextareaWithHighlight(text1, setText1, text2)}
      {renderTextareaWithHighlight(text2, setText2, text1)}
      <button
        onClick={() => setIsCompared(true)}
        className="bg-blue-600 text-white p-2 rounded"
      >
        Compare
      </button>
    </div>
  );
};

export default TextInput;
