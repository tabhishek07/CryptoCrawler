import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Name } from "../index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {addCoins} from "../store/watchlistSlice";
import { removeCoins } from "../store/watchlistSlice";
import { store } from "../store/store";
import { MdOutlineStar } from "react-icons/md";

const Card = ({ item, checker }) => {
  // console.log("item");
  // console.log(checker);
  const [showModal, setShowModal] = useState(false);
  const data  = useSelector((store) => store.watchlistSlice);

  const isPresent = (element, array) => array.some(obj => JSON.stringify(obj) === JSON.stringify(element));

  const starRenderingLogic = isPresent(item , data);



  const dispatch = useDispatch();
  console.log(data);

  

  function addCoinsTowatchlist() {
    dispatch(addCoins(item));
  }

  const removeCoinsFromwatchlist = () =>{
    dispatch(removeCoins(item));
    setShowModal(false);
  }

  const handleRemoveClick = () => {
    setShowModal(true);
  };


  return (
    <div className="flex ">
      {/* // div for whole card */}
      <div className="w-full flex flex-col border border-orange-600 border-2 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-gray-300 mt-4 rounded-md shadow-lg gap-5 text-white transition-transform transform hover:scale-105 hover:shadow-2xl">
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
          {starRenderingLogic ?(<MdOutlineStar  onClick={ handleRemoveClick}
             className="text-[30px]"/>)  :(<IoMdStarOutline 
            onClick={addCoinsTowatchlist}
             className="text-[30px]" />)}
        </div>

        {/* div for change in 24h and arrow  */}

        <div className="flex items-center gap-4">
          {checker !== "top10" && (
            <h2 className=" border border-green-600 shadow-md font-bold rounded-full p-2">
              &#x24;{Math.round(item.price_change_24h*1000000000)/1000000000}
            </h2>
          )}

          <div className="border rounded-full text-[20px] border-white p-1">
            {checker === "top10" ? ( 
              Math.round(item.data.price_change_percentage_24h.usd*1000 )/1000> 0 ? (
                <FaArrowTrendUp className="text-green-400" />
              ) : (
                <FaArrowTrendDown color="red" />
              )
            ) : Math.round(item.price_change_percentage_24h*1000 )/1000> 0 ? (
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

        <div className="flex font-semibold border rounded-full border-orange-400 justify-center font-sans">
          Total Volume :{" "}
          {checker === "top10" ? item.data.total_volume : item.total_volume}
        </div>

        {/* div for market cap  */}
        <div className="flex font-semibold border rounded-full border-orange-400 justify-center font-sans">
          Market cap :{" "}
          {checker === "top10" ? item.data.market_cap : item.market_cap}
        </div>
      </div>
      
      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60  flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Confirm Removal</h2>
            <p>Are you sure you want to remove this item from the watchlist?</p>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={removeCoinsFromwatchlist}
                className="bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
