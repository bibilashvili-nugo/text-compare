import Compare from "./CompareMenu";
import TextInput from "./TextInput";
import Logo from "/images/logo.png";
import BurgerMenu from "/images/burgerMenu.png";

const MainSmall = () => {
  return (
    <>
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
          <img src="/icons/downArrow.png" width={14} height={14} alt="arrow" />
        </div>
        <hr className="border border-[#EDEDED]" />
      </div>
      <div className="small:px-4 lg:px-6">
        <Compare />
        <TextInput />
      </div>
    </>
  );
};

export default MainSmall;
