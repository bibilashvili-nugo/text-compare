interface FinalCompareProps {
  text: string;
  diff: { index: number; color: string }[]; // index = position in the text to highlight
}

const FinalCompare = ({ text, diff }: FinalCompareProps) => {
  const chars = text.split("");

  return (
    <div className="w-full h-full p-3 bg-[#F0F7FF] rounded-lg overflow-auto">
      {chars.map((char, idx) => {
        const highlight = diff.find((d) => d.index === idx);
        return (
          <span
            key={idx}
            style={{ color: highlight ? highlight.color : "black" }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default FinalCompare;
