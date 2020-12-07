import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//MUI Staff
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

// Icons
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";
import StarIcon from "@material-ui/icons/Star";
import StarBorderOutlined from "@material-ui/icons/StarBorderOutlined";

//Redux Staff
import { connect } from "react-redux";
import { addToCartAction } from "../../redux/actions/cartActions";

const useStyles = makeStyles({
  actions: {
    padding: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  button: {
    padding: ".5rem",
    fontSize: ".5rem",
    color: "#093438",
    fontWeight: "900",
    marginLeft: ".5rem",
    backgroundColor: "#24cec4",
    borderRadius: 25
  },
  buttonContainer: {
    display: "flex",
    margin: "0 .3rem",
    alignItems: "center"
  },
  card: {
    display: "flex",
    maxHeight: 145,
    boxShadow: "none !important"
  },
  cardMedia: {
    width: "40%",
    display: "flex",
    maxHeight: 125,
    padding: ".3rem",
    alignItems: "center",
    justifyContent: "center"
  },
  cardContent: {
    padding: 4,
    display: "flex",
    flexDirection: "column"
  },
  description: {
    fontSize: "0.65rem"
  },
  container: {
    width: "98%",
    margin: ".5rem auto"
  },

  image: {
    width: "100%",
    maxHeight: 100
  },

  title: {
    fontSize: ".8rem",
    color: "#093438",
    fontWeight: 900,
    paddingBottom: ".3rem"
  },
  price: {
    paddingBottom: "4px"
  },
  star: {
    fontSize: "1rem"
  },
  starwithcolor: {
    color: "yellow"
  }
});

function SearchItemCard(props) {
  const { name, price, title, imageUrl, description, _id } = props;

  useEffect(() => {
    props.addToCartAction(_id);
  });

  const desc =
    description
      .split(" ")
      .slice(0, 10)
      .join(" ") + "...";

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia}>
          <Link to={`/item/${_id}`}>
            <img className={classes.image} src={imageUrl} alt={title} />
          </Link>
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.title}
            variant="body1"
            component={Link}
            to={`/item/${_id}`}
          >
            {name}
          </Typography>
          <Typography className={classes.description} variant="caption">
            {desc}
          </Typography>
          <div>
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
            <StarBorderOutlined className={classes.star} />
            <StarBorderOutlined className={classes.star} />
            <StarBorderOutlined className={classes.star} />
          </div>
          <CardContent className={classes.actions}>
            <Typography className={classes.price} variant="body1">
              {price}
            </Typography>

            <div className={classes.buttonContainer}>
              <FavoriteIcon />
              <Button
                className={classes.button}
                variant="contained"
                component={Link}
                to={`/cart/${_id}`}
              >
                Add to cart
              </Button>
            </div>
          </CardContent>
        </CardContent>
      </Card>
    </div>
  );
}

const mapPropsToState = state => ({
  products: state.products
});

const mapDispatchToState = {
  addToCartAction
};

// SearchItemCard.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired
// };

export default connect(mapPropsToState, mapDispatchToState)(SearchItemCard);
