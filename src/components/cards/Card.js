import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// MUI Staff
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default function Card(props) {
  const { imageUrl, description, price, title, id } = props;
  const desc =
    description
      .split(" ")
      .slice(0, 6)
      .join(" ") + "...";

  return (
    <div className="card">
      <CardMedia className="img" component={Link} to={`/item/${id}`}>
        <img src={imageUrl} alt={title} />
      </CardMedia>
      <div className="info">
        <Typography variant="h4" className="card-title">
          <Link to={`/item/${id}`}>{title}</Link>
        </Typography>
        <Typography variant="caption">{desc}</Typography>
        <Typography variant="subtitle1">
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}
        </Typography>
      </div>
    </div>
  );
}

Card.propsTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};
