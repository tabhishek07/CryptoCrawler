import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Top10 from "./pages/Top10";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Watchlist from "./pages/Watchlist";
import CoinByIdData from "./pages/CoinByIdData";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorElement from "./pages/ErrorElement";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { createContext } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const Name = createContext();

const Applayout = () => {
  return (
    <div>
      <Provider store={store}>
        <Name.Provider value={"aditya"}>
          <Navbar />
          <Outlet />
          <Footer />
        </Name.Provider>
      </Provider>
    </div>
  );
};

const browserRouter = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/top10", element: <Top10 /> },
      { path: "/watchlist", element: <Watchlist /> },
      { path: "/trending", element: <Trending /> },
      { path: "/coin/:id", element: <CoinByIdData /> },
    ],
    errorElement: <ErrorElement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={browserRouter} />);
