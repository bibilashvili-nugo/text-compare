import TextInputUI from "../ui/TextInputUI";

const TextInput = () => {
  return (
    <div className="lg:px-6 small:pt-6 small:flex  small:flex-col small:gap-8">
      <div className="small:flex small:flex-col small:items-center small:gap-4 md:flex-row md:gap-[10px]">
        <TextInputUI />
        <img
          src="/icons/ArrowTwo.png"
          alt="double arrow"
          width={32}
          height={32}
          className="md:rotate-90"
        />
        <TextInputUI />
      </div>
      <div className="w-full flex justify-center">
        <button className="bg-[#383A4899]/60 font-helvetica text-sm leading-7 p-[10px] rounded-[6px] font-helvetica text-white w-[142px]">
          შედარება
        </button>
      </div>
    </div>
  );
};

export default TextInput;
