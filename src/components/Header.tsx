import Logo from "/images/logo.png";
import BurgerMenu from "/images/burgerMenu.png";
import ChevronsLeft from "/images/chevrons-left.png";
import { headerData } from "../constants";
import { SpanTextMenu } from "../ui/text";

const Header = () => {
  return (
    <>
      <div className="bg-secondary lg:hidden small:flex justify-between items-center py-3 small:px-5 md:px-[30px]">
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
      <div className="lg:grid grid-cols-[240px_calc(100%-240px)] small:hidden">
        <div className="bg-secondary">
          <div className="flex justify-end w-full pt-3 pr-[27px]">
            <img
              src={ChevronsLeft}
              alt="chevrons-left"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <div className="pt-[13px] pl-6 pb-[27px]">
            <img
              src={Logo}
              alt="logo"
              width={110}
              height={44}
              className="cursor-pointer "
            />
          </div>
          <div className="flex flex-col pl-[12.8px]">
            {headerData?.map((item) => {
              const hasMidleIcon = item?.middleIcon;
              const active = item?.active;
              return (
                <div
                  key={item?.text}
                  className={`relative pl-[11.2px] flex items-center gap-[9px] py-3.5 cursor-pointer ${
                    active && "bg-white rounded-l-[30px]"
                  } `}
                >
                  {/* {index === 0 && (
                    <div className="absolute right-0 bottom-0 w-3 h-3 bg-red-500 rounded-tl-[90px]"></div>
                  )} */}

                  {/* {index === 0 && (
                    <div
                      className="absolute bottom-0 right-0 w-6 h-6 bg-red-500 z-10"
                      style={{ clipPath: "ellipse(50% 25% at 100% 100%)" }}
                    ></div>
                  )} */}

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
        </div>
        <div className="">right side</div>
      </div>
    </>
  );
};

export default Header;
