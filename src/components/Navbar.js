function Navabr(){
    return(
        <div className="flex border shadow-xl justify-between items-center px-4">
            <h1 className='text-[25px] font-black'>Crypto<span className="text-blue-800">Crawler</span></h1>
            <navitems className="flex font-black text-[20px] gap-8">
                <p className="cursor-pointer hover:text-blue-800">Top10</p>
                <p className="cursor-pointer hover:text-blue-800">Trending</p>
                <p className="cursor-pointer hover:text-blue-800">Watchlist</p>
            </navitems>

        </div>
    );
}

export default Navabr;