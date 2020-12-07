import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    width: 165,
    maxHeight: 220,
    border: "1px solid #ddd",
    borderRadius: 10,
    backgroundColor: "#f9f9f9"
  },
  cardContent: {
    width: "100%",
    height: "20%",
    padding: 10,
    marginTop: 2,
    background: "white"
  },
  description: {
    fontSize: "0.7rem"
  },
  image: {
    width: " 100%",
    // display: "flex",
    // maxHeight: "80px",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: "100%",
    height: "121px",
    objectFit: "contain",
    borderRadius: 5
  },
  price: {
    color: "#093438"
  }
});

export default function ImgMediaCard(props) {
  const { name, price, description, images, _id } = props;

  const desc =
    description
      .split(" ")
      .slice(0, 3)
      .join(" ") + "...";

  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.card}>
      <Link to={`/item/${_id}`}>
        <CardMedia className={classes.image}>
          <img className={classes.img} src={images} alt="" />
        </CardMedia>
      </Link>
      <div className={classes.cardContent}>
        <Typography gutterBottom variant="caption" component="h4">
          {name}
        </Typography>
        <Typography
          variant="body2"
          className={classes.description}
          color="textSecondary"
          component="p"
        >
          {desc}
        </Typography>
        <Typography
          variant="body1"
          className={classes.price}
          color="textSecondary"
          component="h1"
        >
          {price}
        </Typography>
      </div>
    </Paper>
  );
}
