import React from "react";

//MUI Staff
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import makeStyles from "@material-ui/core/styles/makeStyles";

//Custom components
import Header from "../components/header/Header";
import BottomTabNavigation from "../components/bottomNavgation/BottomNav";
import FormGroup from "@material-ui/core/FormGroup";

const useStyles = makeStyles({
  container: {
    marginTop: "5%",
    backgroundColor: "#fff"
  }
});

function AddItem() {
  const classes = useStyles();

  return (
    <div className="home-screen">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className={classes.container}>
          <div className="choice-categor">
            <Typography component="h3" variant="body2">
              Choice a Category
            </Typography>
          </div>

          <FormControl>
            <FormGroup>
              <TextField name="name" label="Name" />
              <TextField name="type" label="Type" />
            </FormGroup>
          </FormControl>
        </div>
      </div>
      <div className="bottom-Tab-Navigation">
        <BottomTabNavigation />
      </div>
    </div>
  );
}

export default AddItem;
