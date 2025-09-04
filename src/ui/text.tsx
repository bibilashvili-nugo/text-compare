import type React from "react";

interface MenuText {
  children: React.ReactNode;
  active?: boolean;
}

const SpanTextMenu: React.FC<MenuText> = ({ children, active }) => {
  return (
    <span
      className={`text-sm leading-5 font-helvetica ${
        active
          ? "text-secondary font-helvetica-bold"
          : "text-white font-helvetica"
      }`}
    >
      {children}
    </span>
  );
};

export { SpanTextMenu };
