import React from "react";
import { Link } from "react-router-dom";

//MUI Staff
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";

//MUI Icons
import SearchIcon from "@material-ui/icons/Search";
import MicroIcon from "@material-ui/icons/MicNoneOutlined";

export default function SearchInput(props) {
  const useStyles = makeStyles({
    button: {
      width: "100%",
      justifyContent: "left",
      background: "none",
      fontSize: "0.7rem !important",
      textTransform: "capitalize"
    }
  });

  const classes = useStyles();

  return (
    <div className="search-container">
      <div className="header-subHeader">
        <SearchIcon />
        <Button
          component={Link}
          to="/search"
          className={classes.button}
          variant="text"
        >
          Search products, brands and categories
        </Button>
      </div>
      <div className="camera">
        <IconButton component={Link} to="/search">
          <MicroIcon className="menu" />
        </IconButton>
      </div>
    </div>
  );
}
