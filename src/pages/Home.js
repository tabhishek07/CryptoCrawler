import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaStar, FaListAlt } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-neutral-900 via-gray-800 to-rose-900 min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Welcome to CryptoTracker</h1>
        <p className="text-lg mb-8 text-black font-semibold">
          Track your favorite cryptocurrencies and stay updated with the latest trends.
        </p>
        <Link to="/trending">
          <button className="bg-green-500 px-6 py-3 rounded-lg text-lg md:text-xl font-semibold transition-transform transform hover:scale-105">
            <p className="animate-pulse">Explore Trending Coins</p>
          </button>
        </Link>
      </section>

      {/* Key Features Section */}
      <section className="p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
            <FaChartLine className="text-4xl mb-4 mx-auto text-green-400" />
            <h3 className="text-xl font-semibold mb-2">Trending Coins</h3>
            <p>Discover the latest and most popular cryptocurrencies in the market.</p>
            <Link to="/trending">
              <button className="text-blue-400 hover:underline mt-4">Learn More</button>
            </Link>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
            <FaStar className="text-4xl mb-4 mx-auto text-yellow-400" />
            <h3 className="text-xl font-semibold mb-2">Top 10 Coins</h3>
            <p>View the top 10 cryptocurrencies based on various metrics.</p>
            <Link to="/top10">
              <button className="text-blue-400 hover:underline mt-4">Learn More</button>
            </Link>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
            <FaListAlt className="text-4xl mb-4 mx-auto text-orange-400" />
            <h3 className="text-xl font-semibold mb-2">Your Watchlist</h3>
            <p>Keep track of your favorite cryptocurrencies and see their performance.</p>
            <Link to="/watchlist">
              <button className="text-blue-400 hover:underline mt-4">Learn More</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="bg-gray-800 p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Latest Updates</h2>
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4">Stay informed with the latest news and updates in the cryptocurrency world.</p>
          <Link to="/news">
            <button className="bg-blue-500 px-6 py-3 rounded-lg text-lg md:text-xl font-semibold transition-transform transform hover:scale-105">
              Read Latest News
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 p-6 text-center text-gray-400">
        <p>&copy; 2024 CryptoTracker. All rights reserved.</p>
        <div className="mt-4">
          <Link to="/about" className="text-blue-400 hover:underline mx-2">About</Link>
          <Link to="/contact" className="text-blue-400 hover:underline mx-2">Contact</Link>
          <Link to="/privacy" className="text-blue-400 hover:underline mx-2">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
