const Spinner = () => {
  return (
    <div className="w-9 h-9 rounded-full border-4 border-t-white border-[#4571E4] animate-spin flex items-center justify-center">
      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
        <div className="w-3 h-3 border-2 border-t-white border-[#4571E4] rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;
