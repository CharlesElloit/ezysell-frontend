import React from "react";
import { Link } from "react-router-dom";

import ArrowForward from "@material-ui/icons/ArrowForwardIos";

export default function ItemDetailDeliveryReturn() {
  return (
    <div className="delivery__return">
      <div className="delivery-info-content">
        <h3 className="delivery-info-title">Delivery Information</h3>
        <div className="more-info">
          <Link to="/">more</Link>
          <ArrowForward />
        </div>
      </div>
      <p>
        Shipped from Abroad and normally delivered between Wednesday 2 Dec and
        Saturday 5 Dec. Please check exact dates in the checkout page
      </p>
      <hr />

      <div className="delivery-info-content">
        <h3 className="delivery-info-title">Return Information</h3>
        <div className="more-info">
          <Link to="/">more</Link>
          <ArrowForward />
        </div>
      </div>
      <p>
        Free return within 15 days for the seller and 8 days for other eligible
        items
      </p>
    </div>
  );
}
