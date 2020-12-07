import React from "react";

import Adds from "../components/Adds";
import Header from "../components/header/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import TrendingItems from "../components/TrendingItems";
import BottomTabNavigation from "../components/bottomNavgation/BottomNav";
import Products from "../components/Products";
import "./HomeScreen.css";

export default function HomeScreen() {
  return (
    <div className="home-screen">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Categories />
        <Banner />
        <TrendingItems />
        <Adds />
        <Products />
      </div>
      <div className="bottom-Tab-Navigation">
        <BottomTabNavigation />
      </div>
    </div>
  );
}
