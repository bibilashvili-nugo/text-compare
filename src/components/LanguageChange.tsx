import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./../components/ui/dropdown-menu";
import { useState, useRef, useEffect } from "react";

const LanguageChange = () => {
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
  );
};

export default LanguageChange;
