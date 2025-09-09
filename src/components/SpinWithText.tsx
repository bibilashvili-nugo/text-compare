import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";

const SpinWithText = () => {
  const [progress, setProgress] = useState(0);
  const duration = 1000;
  const intervalTime = 30;

  useEffect(() => {
    const increment = 100 / (duration / intervalTime);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-72 items-center flex justify-center">
      <div className="flex items-center justify-center w-[280px] h-[80px] gap-0.5 px-4 py-5 border rounded-[8px] border-[#E1E1E1]">
        <Spinner />
        <div>
          <span className="text-[10px] leading-4 font-helvetica text-[#383A4899]/60">
            Converting...Thank you For your Patience
          </span>
          <div className="flex items-center gap-2">
            <span className="text-base leading-6 font-helvetica-bold text-[#383A48]">
              {Math.round(progress)}%
            </span>
            <div className="w-full h-2 bg-[#F6F9FF] rounded-[64px]">
              <div
                className="h-2 bg-[#4571E4] rounded-[64px]"
                style={{
                  width: `${progress}%`,
                  transition: "width 50ms linear",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinWithText;
