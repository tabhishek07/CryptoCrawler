import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Top10 = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const url ="https://api.coingecko.com/api/v3/search/trending/";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then(( data ) => {
        setData(data);
      })
      .catch(( error) => {
        console.log(error);
      });
      console.log(data)
  }, []);
  return data.length === 0 ?(
    <div>UI Loading</div>):(
      <div className="bg-gradient-to-r from-neutral-900 via-gray-800 to-rose-900 pb-4">
      <Cards apiData={data.coins} checker={"top10"} />
    </div>
    )
    
};

export default Top10;