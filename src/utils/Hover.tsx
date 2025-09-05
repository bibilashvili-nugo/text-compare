interface Props {
  hoverIndex?: number | null;
  index: number;
}

const Hover = ({ hoverIndex, index }: Props) => {
  const getVisualIndex = (defaultIndex: number) => {
    if (hoverIndex === 2) {
      if (defaultIndex === 0) return 1;
      if (defaultIndex === 2) return 3;
    } else if (hoverIndex === 3) {
      if (defaultIndex === 0) return 2;
      if (defaultIndex === 2) return 4;
    } else if (hoverIndex === 4) {
      if (defaultIndex === 0) return 3;
      if (defaultIndex === 2) return 5;
    } else if (hoverIndex === 1) {
      if (defaultIndex === 0) return 0;
      if (defaultIndex === 2) return 2;
    } else if (hoverIndex === 0) {
      if (defaultIndex === 0) return -1;
      if (defaultIndex === 2) return 1;
    }
    return defaultIndex;
  };

  return (
    <>
      {getVisualIndex(0) === index && (
        <>
          <div className="absolute w-3 h-3 z-10 bg-white right-0 bottom-0"></div>
          <div className="absolute w-3 h-3 z-10 bg-secondary rounded-br-[20px] right-0 bottom-0"></div>
        </>
      )}

      {getVisualIndex(2) === index && (
        <>
          <div className="absolute w-3 h-3 z-10 bg-white right-0 top-0"></div>
          <div className="absolute w-3 h-3 z-10 bg-secondary rounded-tr-[20px] right-0 top-0"></div>
        </>
      )}
    </>
  );
};

export default Hover;
