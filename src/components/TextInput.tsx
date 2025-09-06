import { useState } from "react";
import TextInputUI from "../ui/TextInputUI";
import FinalCompare from "../ui/FinalCompare";

const TextInput = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diff1, setDiff1] = useState<{ index: number; color: string }[]>([]);
  const [diff2, setDiff2] = useState<{ index: number; color: string }[]>([]);
  const [isCompared, setIsCompared] = useState(false);

  const handleCompare = () => {
    const calculateDiff = (oldText: string, newText: string) => {
      const diffs: { index: number; color: string }[] = [];
      const length = Math.max(oldText.length, newText.length);

      for (let i = 0; i < length; i++) {
        if (oldText[i] !== newText[i]) {
          diffs.push({
            index: i,
            color: newText[i] ? "#21a400" : "#ff0000", // green for added, red for removed
          });
        }
      }
      return diffs;
    };

    setDiff1(calculateDiff(text1, text2));
    setDiff2(calculateDiff(text2, text1));
    setIsCompared(true);
  };

  return (
    <div className="lg:px-6 small:pt-6 small:flex small:flex-col small:gap-8">
      <div className="small:flex small:flex-col small:items-center small:gap-4 md:flex-row md:gap-[10px]">
        {!isCompared ? (
          <TextInputUI text={text1} setText={setText1} />
        ) : (
          <FinalCompare text={text1} diff={diff1} />
        )}

        <img
          src="/icons/ArrowTwo.png"
          alt="double arrow"
          width={32}
          height={32}
          className="md:rotate-90"
        />

        {!isCompared ? (
          <TextInputUI text={text2} setText={setText2} />
        ) : (
          <FinalCompare text={text2} diff={diff2} />
        )}
      </div>

      <div className="w-full flex justify-center mt-4">
        <button
          className="bg-[#383A4899]/60 font-helvetica text-sm leading-7 p-[10px] rounded-[6px] text-white w-[142px]"
          onClick={handleCompare}
        >
          შედარება
        </button>
      </div>
    </div>
  );
};

export default TextInput;
