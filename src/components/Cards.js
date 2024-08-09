import React from "react";
import Card from "./Card";

const Cards = ({ apiData, checker }) => {

  console.log("api data in Cards",apiData);
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-5">
      {apiData.map((element, index) => (
        <Card 
         item={ checker === 'top10' ? element.item :element}
          key={ checker === 'top10' ? element.item.id : element.id} 
        checker = {checker}  
        />
      ))}
    </div>
  );
};

export default Cards;