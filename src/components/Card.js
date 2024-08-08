import React from "react";
import { MdOutlineStarRate } from "react-icons/md";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";

const Card = ({ item }) => {
  console.log("item");
  console.log(item);


  return (
  
  <div className="flex ">

{/* // div for whole card */}
    <div className="w-full flex flex-col border p-4 bg-gradient-to-r from-slate-500 to-slate-800 mt-4 rounded-md shadow-lg gap-5 text-white">

      {/* div for image name symbol and star  */}
      <div className="flex gap-4 items-center ">
        <img src={item.image} alt={item.name} className="w-1/3"/>
        <div className="w-32">
          <h2 className="font-bold">{item.name}</h2>
          <h3 className="font-semibold">{item.symbol}</h3>
        </div>
        <MdOutlineStarRate className="text-[30px]" />
      </div>

      {/* div for change in 24h and arrow  */}

      <div className="flex items-center gap-4">
        <h2 className=" border border-green-600 shadow-md font-bold rounded-full p-2"> &#x24;{item.price_change_24h}</h2>
        <div className="border rounded-full text-[20px] border-green-600">{item.ath_change_percentage > 0 ? (
           < FaArrowTrendUp />
          ) : (
            <FaArrowTrendDown />
          )}
          </div>
      </div>

      {/* div for total_volume */}

      <div className="flex font-semibold border rounded-full border-black justify-center font-sans">Total Volume :  &#x24;{item.total_volume}</div>

      {/* div for market cap  */}
      <div className="flex font-semibold border rounded-full border-black justify-center font-sans">Market cap : &#x24; {item.market_cap}</div>
    </div>


    

  </div>
 
    
  );
};

export default Card;
