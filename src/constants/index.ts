import type { FC } from "react";
import {
  ArrowRight,
  Check,
  Mic,
  Pdf,
  SpellingCheck,
  TextVoice,
} from "../ui/Icons";

interface HeaderItem {
  text: string;
  icon: string | FC<{ color?: string }>;
  active?: boolean;
  middleIcon?: FC<{ color?: string }>; // 👈 optional React component
}

const headerData: HeaderItem[] = [
  { text: "მართლმწერი", icon: Check },
  {
    text: "ტექსტის შედარება",
    icon: SpellingCheck,
    active: true,
  },
  {
    text: "ხმა ტექსტი",
    middleIcon: ArrowRight,
    icon: Mic,
  },
  {
    text: "ტექსტი ხმა",
    middleIcon: ArrowRight,
    icon: TextVoice,
  },
  {
    text: "PDF კონვერტაცია",
    icon: Pdf,
  },
];

export { headerData };
