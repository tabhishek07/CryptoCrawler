import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Top10 from "./pages/Top10";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Watchlist from "./pages/Watchlist"


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorElement from './pages/ErrorElement';

import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

const Applayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />

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
      ],
      errorElement: <ErrorElement />,
    },
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={browserRouter} />);


