import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  contianer: {
    background: "#ddd !important",
    opacity: "0.3",
    padding: "6px 20px",
    margin: ".3rem 0",
    borderRadius: 20
  },
  itemContainer: {
    paddingLeft: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    width: 160,
    height: 90,
    display: "flex",
    opacity: "0.3",
    boxShadow: "none",
    alignItems: "center",
    justifyContent: "center",
    background: "#ddd !important"
  },
  progress: {
    backgroundColor: "#ddd",
    color: "#ddd !important"
  },
  root: {
    flexGrow: 1,
    width: "100%",
    marginTop: 5,
    alignItems: "center"
  }
});

function ProductCardLoading() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item sm={6}>
        <Grid container spacing={1} className={classes.itemContainer}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            return (
              <Grid item key={index}>
                <Paper variant="elevation" className={classes.paper}>
                  <CircularProgress />
                </Paper>
                <div className="info">
                  <Typography className={classes.contianer} variant="subtitle1">
                    <LinearProgress
                      color="secondary"
                      className={classes.progress}
                    />
                  </Typography>
                  <Typography className={classes.contianer} variant="subtitle1">
                    <LinearProgress className={classes.progress} />
                  </Typography>
                  <Typography className={classes.contianer} variant="subtitle1">
                    <LinearProgress className={classes.progress} />
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProductCardLoading;
