import React from "react";

//MUI Staff
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loading() {
  const useStyles = makeStyles({
    loadingContainer: {
      display: "flex",
      flexDirection: "column",
      height: "85vh",
      alignItems: "center",
      justifyContent: "center"
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.loadingContainer}>
      <h1>loading...</h1>
      <CircularProgress />
    </div>
  );
}
