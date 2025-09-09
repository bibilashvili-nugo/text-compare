import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./../components/ui/dropdown-menu";
import { useState, useRef, useEffect } from "react";

const Compare = () => {
  const [selectedLang, setSelectedLang] = useState("ქართული");
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (triggerRef.current) {
        setContentWidth(triggerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => setOpen(false); // closes dropdown
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-[17px] lg:px-6 pt-6">
      <div className="flex small:flex-col small:gap-4 md:flex-row">
        <div className="small:flex small:flex-col small:gap-4 md:w-1/2 md:flex-row">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <div
                ref={triggerRef}
                className="w-full md:w-[120px] flex justify-between items-center small:pr-[6px] small:pl-[14px] border border-[#E0E0E0] small:py-[9px] small:rounded-[8px] cursor-pointer"
              >
                <span className="font-helvetica small:text-sm leading-[22px]">
                  {selectedLang}
                </span>
                <img
                  src="/icons/downArrow.png"
                  alt="arrow down"
                  width={24}
                  height={24}
                />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side="bottom"
              align="start"
              className="border border-[#E0E0E0] rounded-md shadow-md bg-white"
              style={{ width: contentWidth }}
            >
              <DropdownMenuItem
                onClick={() => setSelectedLang("ქართული")}
                className="cursor-pointer"
              >
                ქართული
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setSelectedLang("English")}
                className="cursor-pointer"
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setSelectedLang("Русский")}
                className="cursor-pointer"
              >
                Русский
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
