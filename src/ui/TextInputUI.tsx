interface Props {
  text?: string;
  setText?: (newValue: string) => void;
}

const TextInputUI = ({ text, setText }: Props) => {
  return (
    <textarea
      className="w-full bg-[#F0F7FF] small:h-[190px] rounded-[8px] p-3 font-helvetica 
      text-sm leading-[22px] text-[#333] resize-none focus:outline-none focus:ring-0 md:h-[432px]"
      placeholder="დაიწყე წერა..."
      value={text}
      onChange={(e) => setText && setText(e.target.value)}
    />
  );
};

export default TextInputUI;
