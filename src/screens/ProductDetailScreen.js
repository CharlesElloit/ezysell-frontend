import React from "react";
import Button from "@material-ui/core/Button";

import ItemDetailsBannerImg from "../components/ItemDetailsBannerImg";
import Header from "../components/header/Header";
import "./ItemDetails.css";
import "./ProductDetail.css";

export default function ItemDetails({ match }) {
  const id = match.params.id;

  return (
    <div className="home-screen">
      <header className="itemDetails-header">
        <Header />
      </header>
      <div className="main itemDetails-main">
        <ItemDetailsBannerImg id={id} />
      </div>
      <div className="bottom-Tab-Navigation item-details__buttons">
        <div className="itemDetails__contianer-buttons">
          <Button className="buy-now-btn" variant="outlined">
            Buy it now
          </Button>
          <Button>make offer</Button>
        </div>
      </div>
    </div>
  );
}
