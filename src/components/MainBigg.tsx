import Logo from "/images/logo.png";
import ChevronsLeft from "/images/chevrons-left.png";
import { headerData } from "../constants";
import { SpanTextMenu } from "../ui/text";
import Compare from "./CompareMenu";
import TextInput from "./TextInput";
import { useState } from "react";
import Hover from "../utils/Hover";

const MainBigg = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <>
      <div className="bg-[#132450] h-screen flex flex-col">
        <div className="flex justify-end w-full pt-3 pr-[27px] ">
          <img
            src={ChevronsLeft}
            alt="chevrons-left"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
        <div className="pt-[13px] pl-6 pb-[27px] ">
          <img
            src={Logo}
            alt="logo"
            width={110}
            height={44}
            className="cursor-pointer "
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col pl-[12.8px] ">
            {headerData?.map((item, index) => {
              const isHovered = hoverIndex === index;
              const isActive = index === 1 && hoverIndex === null;
              const MiddleIcon = item?.middleIcon;
              const Icon = item?.icon;

              return (
                <div
                  key={item?.text}
                  className={`relative pl-[11.2px] flex items-center gap-[9px] py-3.5 cursor-pointer ${
                    isActive || isHovered ? "bg-white rounded-l-[30px]" : ""
                  } `}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <Hover hoverIndex={hoverIndex} index={index} />
                  <Icon color={isActive || isHovered ? "#132450" : "white"} />
                  {MiddleIcon ? (
                    <div className="flex gap-1 items-center">
                      <SpanTextMenu active={isActive || isHovered}>
                        {item?.text.split(" ")[0]}
                      </SpanTextMenu>
                      <MiddleIcon
                        color={isActive || isHovered ? "#132450" : "white"}
                      />
                      <SpanTextMenu active={isActive || isHovered}>
                        {item?.text.split(" ")[1]}
                      </SpanTextMenu>
                    </div>
                  ) : (
                    <SpanTextMenu active={isActive || isHovered}>
                      {item?.text}
                    </SpanTextMenu>
                  )}
                </div>
              );
            })}
          </div>

          <div>
            <hr className="border border-[#9EB9FF33]/20" />
            <div className="flex items-center gap-[5px] justify-between py-5 px-[14px]">
              <div className="flex items-center gap-[5px]">
                <img
                  src="/icons/UserImage.png"
                  width={20}
                  height={20}
                  alt="user image"
                />
                <span className="font-helvetica text-sm leading-5 text-white">
                  თამარ ონიანი
                </span>
              </div>
              <img
                src="/icons/dotsMenu.png"
                width={24}
                height={24}
                alt="dots menu"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Compare />
        <TextInput />
      </div>
    </>
  );
};

export default MainBigg;
