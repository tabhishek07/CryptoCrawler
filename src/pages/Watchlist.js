import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import LoadingPage from "../components/LoadingCard";

const Watchlist = () => {
  const data = useSelector((store) => store.watchlistSlice);
  console.log(data);

  return data.length === 0 ? (
    <div className="flex items-center justify-center h-screen bg-custom-charcoal">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">No Data Found</h1>
        <p className="text-lg text-gray-400">
          Your watchlist is empty. Add some items to see them here.
        </p>
      </div>
    </div>
  ) : (
    <div className="bg-custom-charcoal pb-4">
      <Cards apiData={data} />
    </div>
  );
};

export default Watchlist;
