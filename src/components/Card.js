import React from "react";
import { MdOutlineStarRate } from "react-icons/md";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Name } from "../index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {addCoins} from "../store/watchlistSlice";
import { store } from "../store/store";

const Card = ({ item, checker }) => {
  // console.log("item");
  // console.log(checker);
  const data  = useSelector((store) => store.watchlistSlice);
  const dispatch = useDispatch();
  console.log(data);

  function addCoinsTowatchlist() {
    dispatch(addCoins(item));
  }

  return (
    <div className="flex ">
      {/* // div for whole card */}
      <div className="w-full flex flex-col border p-4 bg-gradient-to-r from-slate-500 to-slate-800 mt-4 rounded-md shadow-lg gap-5 text-white">
        {/* div for image name symbol and star  */}
        <div className="flex gap-4 items-center ">

          <abbr  className="w-1/3" title="Click to know more!">
          <Link to={`/coin/${item.id}`}>
            {" "}
            <img
              src={checker === "top10" ? item.thumb : item.image}
              alt="crypto_symbol"
            />
          </Link>
        </abbr>

          <div className="w-32">
            <h2 className="font-bold">{item.name}</h2>
            <h3 className="font-semibold">{item.symbol}</h3>
          </div>
          <MdOutlineStarRate
          onClick={addCoinsTowatchlist}
           className="text-[30px]" />
        </div>

        {/* div for change in 24h and arrow  */}

        <div className="flex items-center gap-4">
          {checker !== "top10" && (
            <h2 className=" border border-green-600 shadow-md font-bold rounded-full p-2">
              &#x24;{item.price_change_24h}
            </h2>
          )}

          <div className="border rounded-full text-[20px] border-black">
            {checker === "top10" ? (
              item.data.price_change_percentage_24h.usd > 0 ? (
                <FaArrowTrendUp className="text-green-400" />
              ) : (
                <FaArrowTrendDown color="red" />
              )
            ) : item.price_change_percentage_24h > 0 ? (
              <FaArrowTrendUp color="green" />
            ) : (
              <FaArrowTrendDown color="red" />
            )}
          </div>
        </div>

        <h3 className="text-[28px] font-bold text-green-400">
          {/* {" "} */}
          &#x24;
          {checker === "top10"
            ? Math.round(item.data.price * 1000) / 1000
            : item.current_price}
        </h3>

        {/* div for total_volume */}

        <div className="flex font-semibold border rounded-full border-black justify-center font-sans">
          Total Volume :{" "}
          {checker === "top10" ? item.data.total_volume : item.total_volume}
        </div>

        {/* div for market cap  */}
        <div className="flex font-semibold border rounded-full border-black justify-center font-sans">
          Market cap :{" "}
          {checker === "top10" ? item.data.market_cap : item.market_cap}
        </div>
      </div>
    </div>
  );
};

export default Card;
