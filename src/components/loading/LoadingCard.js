import React, { Fragment } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function LoadingCard() {
  const useStyles = makeStyles({
    contianer: {
      background: "#ddd !important",
      opacity: "0.3",
      padding: "6px 20px",
      margin: ".3rem 0",
      borderRadius: 20
    },
    progress: {
      backgroundColor: "#ddd",
      color: "#ddd !important"
    },
    img: {
      width: "100%",
      display: "flex",
      height: 120,
      minHeight: 120,
      maxHeight: 135,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      background: "#ddd !important",
      opacity: "0.3",
      borderRadius: 5
    }
  });

  const loadingItems = [1, 2, 3, 4, 5, 6];

  const classes = useStyles();
  return (
    <Fragment>
      {loadingItems.map(item => (
        <div key={item} className="card">
          <CardMedia className={classes.img}>
            <CircularProgress />
          </CardMedia>
          <div className="info">
            <Typography className={classes.contianer} variant="subtitle1">
              <LinearProgress color="secondary" className={classes.progress} />
            </Typography>
            <Typography className={classes.contianer} variant="subtitle1">
              <LinearProgress className={classes.progress} />
            </Typography>
            <Typography className={classes.contianer} variant="subtitle1">
              <LinearProgress className={classes.progress} />
            </Typography>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
