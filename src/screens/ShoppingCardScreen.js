import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";

import Header from "../components/header/Header";
import BottomTabNavigation from "../components/bottomNavgation/BottomNav";

export default function ShoppingCardScreen() {
  return (
    <div className="home-screen">
      <Slide in={true} direction="up" appear={true}>
        <div className="header">
          <Header />
        </div>
      </Slide>
      <div className="main">
        <div className="shopping-cart">
          <div className="shopping-cart-container">
            <img src="./empty-cart.png" alt="shopping-cart" />
          </div>
          <h3>Your cart is empty!</h3>
          <Link to="/">
            <Button variant="outlined">start shopping</Button>
          </Link>
        </div>
      </div>
      <div className="bottom-Tab-Navigation">
        <BottomTabNavigation />
      </div>
    </div>
  );
}
