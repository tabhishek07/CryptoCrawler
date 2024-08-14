import { Link } from "react-router-dom";
function Navabr() {
  return (
    <div className="flex  shadow-xl justify-between items-center px-4 sticky top-0  bg-custom-blue  z-10 ">
      <Link to={"/"}>
        {" "}
        <h1 className="sm:text-[15px] font-black  md:text-[20px] font-black lg:text-[25px] font-black text-white font-serif">
          Crypto<span className="text-orange-600">Crawler</span>
        </h1>
      </Link>
      <navitems className="flex font-serif text-[18px] gap-8">
        
        <Link to={"/"}>
        {" "}
        <p className="cursor-pointer text-white hover:text-orange-500 font-bold">
            Home
            </p>
        </Link>
        <div className="w-1 h-7 rounded-lg bg-orange-500"></div>
        <Link to={"/top10"}>
          {" "}
          <p className="cursor-pointer text-white hover:text-orange-500">
            Top10
          </p>
        </Link>
        <Link to={"/trending"}>
          {" "}
          <p className="cursor-pointer text-white hover:text-orange-500">
            Trending
          </p>
        </Link>
        <Link to={"watchlist"}>
          {" "}
          <p className="cursor-pointer text-white hover:text-orange-600">
            Watchlist
          </p>
        </Link>
      </navitems>
    </div>
  );
}

export default Navabr;
