import Logo from "/images/logo.png";
import BurgerMenu from "/images/burgerMenu.png";
import ChevronsLeft from "/images/chevrons-left.png";
import { headerData } from "../constants";
import { SpanTextMenu } from "../ui/text";

const Header = () => {
  return (
    <>
      <div className=" lg:hidden">
        <div className=" small:flex justify-between items-center py-3 small:px-5 md:px-[30px] bg-secondary">
          <img
            src={Logo}
            alt="logo"
            width={90}
            height={36}
            className="cursor-pointer"
          />

          <img
            src={BurgerMenu}
            alt="logo"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>

        <div>
          <div className="flex items-center gap-1 small:py-4 small:pl-4 md:py-6 md:pl-[30px] cursor-pointer">
            <img
              src="/icons/SpellingCheckText.png"
              alt="spelling check"
              width={16}
              height={16}
              className="small:w-4 small:h-4 md:w-6 md:h-6"
            />
            <span className="smaller:text-xs md:text-base leading-5 font-helvetica-bold">
              ტექსტის შედარება
            </span>
            <img
              src="/icons/downArrow.png"
              width={14}
              height={14}
              alt="arrow"
            />
          </div>
          <hr className="border border-[#EDEDED]" />
        </div>
      </div>

      <div className="lg:grid grid-cols-[240px_calc(100%-240px)] small:hidden h-screen">
        <div className="bg-secondary h-screen flex flex-col">
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
                const hasMidleIcon = item?.middleIcon;
                const active = item?.active;
                return (
                  <div
                    key={item?.text}
                    className={`relative pl-[11.2px] flex items-center gap-[9px] py-3.5 cursor-pointer ${
                      active && "bg-white rounded-l-[30px]"
                    } `}
                  >
                    {index === 0 && (
                      <div className="absolute w-3 h-3 z-10 bg-white right-0 bottom-0"></div>
                    )}
                    {index === 0 && (
                      <div className="absolute w-3 h-3 z-10 bg-secondary rounded-br-[20px] right-0 bottom-0"></div>
                    )}

                    {index === 2 && (
                      <div className="absolute w-3 h-3 z-10 bg-white right-0 top-0"></div>
                    )}
                    {index === 2 && (
                      <div className="absolute w-3 h-3 z-10 bg-secondary rounded-tr-[20px] right-0 top-0"></div>
                    )}

                    <img
                      src={item?.icon}
                      alt={item?.text}
                      width={24}
                      height={24}
                    />

                    {hasMidleIcon ? (
                      <div className="flex gap-1 items-center">
                        <SpanTextMenu active={active}>
                          {item?.text.split(" ")[0]}
                        </SpanTextMenu>
                        <img
                          src={item?.middleIcon}
                          alt="rightArrow"
                          width={16}
                          height={16}
                          className="text-white"
                        />
                        <SpanTextMenu active={active}>
                          {item?.text.split(" ")[1]}
                        </SpanTextMenu>
                      </div>
                    ) : (
                      <SpanTextMenu active={active}>{item?.text}</SpanTextMenu>
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
        <div className="">right side</div>
      </div>
    </>
  );
};

export default Header;
