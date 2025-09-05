import MainBigg from "./components/MainBigg";
import MainSmall from "./components/MainSmall";

const App = () => {
  return (
    <>
      <div className="lg:hidden">
        <MainSmall />
      </div>
      <div className="lg:grid grid-cols-[240px_calc(100%-240px)] small:hidden h-screen">
        <MainBigg />
      </div>
    </>
  );
};

export default App;
