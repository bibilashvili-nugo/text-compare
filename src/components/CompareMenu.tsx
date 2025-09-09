import LanguageChange from "./LanguageChange";
import CheckButton from "./CheckButton";

const Compare = () => {
  return (
    <div className="flex flex-col gap-[17px] lg:px-6 pt-6">
      <div className="flex small:flex-col small:gap-4 md:flex-row">
        <div className="small:flex small:flex-col small:gap-4 md:w-1/2 md:flex-row">
          <LanguageChange />

          <CheckButton />
        </div>

        <div className="hidden md:block md:w-1/4"></div>

        <button className="bg-[#383A4899] flex items-center gap-1 w-full justify-center py-2 rounded-[6px] md:w-1/4">
          <img src="/icons/plusAdd.png" alt="pluss" width={24} height={24} />
          <span className="text-white font-helvetica text-sm leading-[28px]">
            ახლის გახსნა
          </span>
        </button>
      </div>
      <hr className="border border-[#EDEDED]" />
    </div>
  );
};

export default Compare;
