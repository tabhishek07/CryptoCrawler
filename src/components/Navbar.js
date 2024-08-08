import { Link } from "react-router-dom";
function Navabr(){
    return(
        <div className="flex border border-black shadow-xl justify-between items-center px-4 sticky top-0  bg-gradient-to-r from-neutral-900 via-gray-800 to-rose-900 ">
            <Link to={"/"}>
            <h1 className='sm:text-[15px] font-black  md:text-[20px] font-black lg:text-[25px] font-black text-white font-serif'>Crypto<span className="text-orange-400">Crawler</span></h1>
            </Link>
            <navitems className="flex font-serif text-[18px] gap-8">

              <Link to={"/top10"}><p className="cursor-pointer text-white hover:text-orange-600" >Top10</p></Link> 
              <Link to={"/trending"}><p className="cursor-pointer text-white hover:text-orange-600">Trending</p></Link> 
              <Link to={"watchlist"}><p className="cursor-pointer text-white hover:text-orange-600">Watchlist</p></Link> 
            </navitems>

        </div>
    );
}

export default Navabr;