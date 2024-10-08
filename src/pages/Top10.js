import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import LoadingPage from "../components/LoadingCard";
import { useRef } from "react";

const Top10 = () => {
  const [data, setData] = useState([]);

  const Data = useRef();

  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/search/trending/";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  }, []);

  return data.length === 0 ? (
    <div><LoadingPage/></div>
  ) : (
    <div className="bg-custom-charcoal  pb-4">
      <h1 ref= { Data}></h1>
      <Cards apiData={data.coins} checker={"top10"} />
    </div>
  );
};

export default Top10;
