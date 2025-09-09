import { useState } from "react";

const CheckButton = () => {
  const [checked, setIsChecked] = useState(false);
  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => setIsChecked(!checked)}
    >
      <label className="flex items-center gap-2 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={checked}
          className="w-5 h-5 cursor-pointer rounded-[4px] border border-[#E0E0E0]"
        />
      </label>
      <span className="leading-[22px] tracking-[1%] font-helvetica text-sm">
        ფორმატის შენარჩუნება
      </span>
    </div>
  );
};

export default CheckButton;
