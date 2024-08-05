import { Link } from "react-router-dom";
function Navabr(){
    return(
        <div className="flex border shadow-xl justify-between items-center px-4">
            <Link to={"/"}>
            <h1 className='text-[25px] font-black'>Crypto<span className="text-blue-800">Crawler</span></h1>
            </Link>
            <navitems className="flex font-black text-[20px] gap-8">

              <Link to={"/top10"}><p className="cursor-pointer hover:text-blue-800">Top10</p></Link> 
              <Link to={"/trending"}><p className="cursor-pointer hover:text-blue-800">Trending</p></Link> 
              <Link to={"watchlist"}><p className="cursor-pointer hover:text-blue-800">Watchlist</p></Link> 
            </navitems>

        </div>
    );
}

export default Navabr;