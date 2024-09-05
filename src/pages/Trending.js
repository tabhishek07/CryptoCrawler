import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import LoadingCard from "../components/LoadingCard";

const Trending = () => {
  //  var data = [{
  //       "id": "bitcoin",
  //       "symbol": "btc",
  //       "name": "Bitcoin",
  //       "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
  //       "current_price": 56894,
  //       "market_cap": 1121499159333,
  //       "market_cap_rank": 1,
  //       "fully_diluted_valuation": 1193280492794,
  //       "total_volume": 37558960659,
  //       "high_24h": 57607,
  //       "low_24h": 55414,
  //       "price_change_24h": 1480.17,
  //       "price_change_percentage_24h": 2.67113,
  //       "market_cap_change_24h": 30078875328,
  //       "market_cap_change_percentage_24h": 2.75594,
  //       "circulating_supply": 19736753,
  //       "total_supply": 21000000,
  //       "max_supply": 21000000,
  //       "ath": 73738,
  //       "ath_change_percentage": -22.92518,
  //       "ath_date": "2024-03-14T07:10:36.635Z",
  //       "atl": 67.81,
  //       "atl_change_percentage": 83713.91956,
  //       "atl_date": "2013-07-06T00:00:00.000Z",
  //       "roi": null,
  //       "last_updated": "2024-08-07T14:02:12.450Z"
  //     }
  //   ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  if (data.length === 0) {
    return <div><LoadingCard/></div>;
  } else {
    return (
      <div className="bg-custom-charcoal pb-4">
        <Cards apiData={data} />
      </div>
    );
  }
};

export default Trending;
