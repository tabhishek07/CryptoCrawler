import React from "react";

const Coindetails = (item) =>{

    console.log("api data from coinbyid page", item)

    return(
    <>
    <div className="text-white">details by id of coin</div>
    <h1 className="text-white">{item.apiData.name}</h1>
    <h2>{item.apiData.marketCap}</h2>
    <h2>{item.apiData.id}</h2>
    <img src={item.apiData.image?.small}></img>
    <h2>{item.apiData.hashing_algorithm}</h2>
    <p>{item.apiData.description?.en}</p>

   
    </>
    
    );
}

export default Coindetails;
