const Compare = () => {
  return (
    <div className="flex flex-col gap-[17px] small:px-4 lg:px-6 pt-6">
      <div className="  flex small:flex-col small:gap-4 md:flex-row">
        <div className="small:flex small:flex-col small:gap-4 md:w-1/2 md:flex-row">
          <div className="flex justify-between small:pr-[6px] small:pl-[14px] border-[1px] border-[#E0E0E0] small:py-[9px] small:rounded-[8px]">
            <span className="font-helvetica small:text-sm leading-[22px]">
              ქართული
            </span>
            <img
              src="/icons/downArrow.png"
              alt="arrow down"
              width={24}
              height={24}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={false}
                className="w-5 h-5 cursor-pointer rounded-[4px] border border-[#E0E0E0]"
              />
            </label>
            <span className="leading-[22px] tracking-[1%] font-helvetica text-sm">
              ფორმატის შენარჩუნება
            </span>
          </div>
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
