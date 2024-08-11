import { useSelector } from "react-redux";
import Cards from "../components/Cards";


const Watchlist = () => {

  var  data = useSelector((store) => store.watchlistSlice);
  console.log(data);

  return data.length === 0 ? (
  <div>No data</div>
  ) : (
  <div className="bg-gradient-to-r from-neutral-900 via-gray-800 to-rose-900 pb-4">
    <Cards apiData = {data} />
    </div>
  );
  
};

export default Watchlist;