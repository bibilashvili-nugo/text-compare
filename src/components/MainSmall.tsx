import Compare from "./CompareMenu";
import TextInput from "./TextInput";
import Logo from "/images/logo.png";
import BurgerMenu from "/images/burgerMenu.png";
import { SpellingCheck } from "../ui/Icons";
import { useResponsiveSize } from "../hooks/ResponsiveSpellingCheck";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { headerData } from "../constants";
import { SpanTextMenu } from "../ui/text";

const MainSmall = () => {
  const size = useResponsiveSize();
  const [isOpen, setIsOpen] = useState(false);
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
        <div
          className="flex items-center gap-1 small:py-4 small:pl-4 md:py-6 md:pl-[30px] cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <SpellingCheck size={size} />
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

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg z-50 p-4"
              initial={{ y: "100%" }}
              animate={{ y: "50%" }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              style={{ height: "110%" }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xs font-helvetica-bold text-[#606060]">
                  აირჩიეთ ხელსაწყო
                </h2>
                <button
                  className="text-gray-500 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
              </div>
              {headerData?.map((item) => {
                const Icon = item?.icon;
                const MiddleIcon = item?.middleIcon;
                return (
                  <div key={item?.text}>
                    <div className="flex py-4 items-center gap-[10px]">
                      <Icon color="#132450" />
                      {MiddleIcon ? (
                        <div className="flex gap-1 items-center">
                          <SpanTextMenu active>
                            {item?.text.split(" ")[0]}
                          </SpanTextMenu>
                          <MiddleIcon color="#132450" />
                          <SpanTextMenu active>
                            {item?.text.split(" ")[1]}
                          </SpanTextMenu>
                        </div>
                      ) : (
                        <SpanTextMenu active>{item?.text}</SpanTextMenu>
                      )}
                    </div>
                    <hr className="border-t border-[#e0e0e0]" />
                  </div>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainSmall;
