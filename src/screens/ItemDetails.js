import React from "react";
import { Link } from "react-router-dom";

//MUI Staff
import Button from "@material-ui/core/Button";

//MUI icons
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";

import ItemDetailsBannerImg from "../components/ItemDetailsBannerImg";
import "./ItemDetails.css";

export default function ItemDetails() {
  return (
    <div className="home-screen">
      <header className="itemDetails-header">
        <div className="itemDetails-header-content">
          <h3>
            <Link to="/">EZY</Link>
          </h3>
          <div className="itemDetails-search__shoppingcart">
            <Link>
              <SearchIcon className="itemDetails-searchIcon" />
            </Link>
            <Link to="/shoppingCart">
              <ShoppingCartIcon />
            </Link>
          </div>
        </div>
      </header>
      <div className="main itemDetails-main">
        <ItemDetailsBannerImg />
      </div>
      <div className="bottom-Tab-Navigation item-details__buttons">
        <div className="itemDetails__contianer-buttons">
          <Button className="buy-now-btn" variant="outlined">
            Buy it now
          </Button>
          <Button>make offer</Button>
        </div>
        {/* <BottomTabNavigation /> */}
      </div>
    </div>
  );
}
