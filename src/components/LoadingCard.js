import React from "react";

const LoadingCard = () => {
  return (
    <div className="w-full flex flex-col border border-gray-600 border-2 p-4 bg-transparent rounded-md shadow-lg gap-5 text-white animate-pulse">
      {/* Div for image, name, symbol, and star */}
      <div className="flex gap-4 items-center">
        <div className="w-1/3 bg-gray-700 h-16 rounded"></div>
        <div className="w-32">
          <div className="bg-gray-700 h-6 w-3/4 rounded mb-2"></div>
          <div className="bg-gray-700 h-4 w-1/2 rounded"></div>
        </div>
        <div className="bg-gray-700 h-8 w-8 rounded-full"></div>
      </div>

      {/* Div for change in 24h and arrow */}
      <div className="flex items-center gap-4">
        <div className="bg-gray-700 h-6 w-12 rounded"></div>
        <div className="bg-gray-700 h-6 w-6 rounded-full"></div>
      </div>

      <div className="bg-gray-700 h-8 w-1/3 rounded"></div>

      {/* Div for total volume */}
      <div className="flex font-semibold border rounded-full border-gray-600 justify-center font-sans bg-gray-700 h-6 w-3/4 mx-auto"></div>

      {/* Div for market cap */}
      <div className="flex font-semibold border rounded-full border-gray-600 justify-center font-sans bg-gray-700 h-6 w-3/4 mx-auto"></div>
    </div>
  );
};

const LoadingPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {Array(16).fill().map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
};

export default LoadingPage;
