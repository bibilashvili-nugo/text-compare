import { useState } from "react";
import { DoubleArrow } from "../ui/Icons";
import DiffTextarea from "./DiffTextarea";

const TextInput = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [isCompared, setIsCompared] = useState(false);

  return (
    <div className="pt-6 flex flex-col items-center font-helvetica lg:px-6">
      <div className="flex flex-col lg:flex-row small:gap-4 md:gap-[10px] w-full pb-8 items-center">
        <DiffTextarea
          text={text1}
          onChange={setText1}
          compareText={text2}
          isCompared={isCompared}
        />
        <div className="small:rotate-90 lg:rotate-180">
          <DoubleArrow />
        </div>
        <DiffTextarea
          text={text2}
          onChange={setText2}
          compareText={text1}
          isCompared={isCompared}
        />
      </div>
      <button
        onClick={() => setIsCompared(true)}
        className="bg-[#383A4899]/60 font-helvetica text-white py-[10px] px-[37px] rounded text-sm leading-[28px] cursor-pointer"
      >
        შედარება
      </button>
    </div>
  );
};

export default TextInput;
