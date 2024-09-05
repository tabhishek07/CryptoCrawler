import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import LoadingCard from "../components/LoadingCard";
import Coindetails from "../components/Coindetails";

// const CoinByIdData = () => {
//   const { id } = useParams();
//   const [like, setLike] = useState(0);
//   const [data, setData] = useState({});
//   var count = useRef(0);
//   var count2 = 0;

//   useEffect(() => {
//     const options = { method: "GET", headers: { accept: "application/json" } };

//     fetch(`https://pro-api.coingecko.com/api/v3/coins/${id}`, options)
//       .then((response) => response.json())
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((err) => console.error(err));
//   }, [id]);

//   function increment() {
//     console.log(count, count2);
//     count.current = count.current + 1;
//     count2 = count2 + 1;
//   }

//   return (
//     <>
//       <h1 className="text-[60px]">CoinByIdData</h1>
//       <button onClick={increment}>Hello</button>
//       <button onClick={() => setLike(like + 1)}>Hello2</button>
//     </>
//   );
// };

const CoinByIdData = () => {
  var ddata = {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    currentPrice: 50000,
    marketCap: 900000000000,
    volume: 30000000000,
    change24h: 2.5,
    description:
      "Bitcoin is a decentralized digital currency without a central bank or single administrator.",
  };

  const { id } = useParams();
  // const [like, setLike] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  },[id]);

  // console.log(data);  

  if (data.length === 0) {
    return (
      <div>
        <LoadingCard />
      </div>
    );
  } else {
    return (
      <div className="bg-custom-charcoal pb-4">
        <Coindetails apiData={data} />
      </div>
    );
  }
};

export default CoinByIdData;
