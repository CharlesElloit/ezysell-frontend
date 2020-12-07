import React from "react";
// import PropTypes from "prop-types";

//MUI Staff
import Typography from "@material-ui/core/Typography";

//Icons
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";

export default function ItemDetailSumary(props) {
  const { name, brand, description, price, currency } = props;

  return (
    <div className="itemDetails-info-simary">
      <h1>{name}</h1>
      <hr />
      <Typography variant="caption">{description}</Typography>
      <p className="condition">
        Brand:
        <Typography variant="overline" className="brand">
          {"  "}
          {brand}
        </Typography>
      </p>
      <div className="price-info">
        <div className="price">
          <Typography variant="h1">
            {price}
            <sub>{!currency && "USD"}</sub>
          </Typography>
          <Typography variant="caption">
            + USD {Math.floor(price / 100)} Shipping
          </Typography>
        </div>
        <div className="price-info-heart">
          <ShareIcon className="price-info-shareIcon" />
          <FavoriteIcon className="price-info-heartIcon" />
        </div>
      </div>
    </div>
  );
}

// ItemDetailSumary.propTypes = {
//   name: PropTypes.string.isRequired,
//   brand: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   currency: PropTypes.string.isRequired
// };
