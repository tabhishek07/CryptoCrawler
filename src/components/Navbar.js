import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../store/userSlice";

function Navabr(props) {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(removeUser());
    navigate("/");
  }

  return (
    <div className="flex flex-wrap shadow-xl justify-between items-center px-4 sticky top-0  bg-custom-blue  z-10 ">
      <Link to={"/"}>
        {" "}
        <h1 className="sm:text-[15px] font-black  md:text-[20px] font-black lg:text-[25px] font-black text-white font-serif">
          Crypto<span className="text-orange-600">Crawler</span>
        </h1>
      </Link>

      {user === "logged in" && (
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
      )}

      <div className="flex gap-3">
        {user === "logged in" ?(
          <button
          onClick={handleClick}
          className="bg-blue-400 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Logout
        </button>
        ) :(
          <>
          <Link to={"Login"}>
          {" "}
          <button
          onClick={handleClick}
          className="text-white bg-blue-500 rounded-lg px-2 items-center justify-center mx-2 trasition-transform hover:scale-105">
            Login
          </button>
        </Link>
        <Link to={"Signin"}>
          {" "}
          <button 
          onClick={handleClick}
          className="text-white bg-blue-500 rounded-lg px-2 items-center justify-center mx-2 trasition-transform hover:scale-105">
            Signin
          </button>
        </Link>
          </>
        )}
        
      </div>
    </div>
  );
}

export default Navabr;
