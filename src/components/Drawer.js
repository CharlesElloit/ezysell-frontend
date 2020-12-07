import React from "react";
import { Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

//MUI Staff
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typrography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

//Icons
import MenuIcon from "@material-ui/icons/CloseOutlined";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import CartIcon from "@material-ui/icons/ShoppingCartOutlined";
import CategoryIcon from "@material-ui/icons/CategoryOutlined";
import UserAccountIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SortIcon from "@material-ui/icons/ListAltOutlined";
import OrderIcon from "@material-ui/icons/ListOutlined";
import ReviewsIcon from "@material-ui/icons/RateReviewOutlined";

const history = createBrowserHistory();

const styles = () => ({
  avatar: {
    width: 50,
    height: 50
  },
  btn: {
    fontSize: ".6rem",
    margin: ".5rem .3rem",
    padding: ".3rem .5rem",
    borderRadius: 20,
    background: "none",
    textTransform: "capitalize",
    fontWeight: 900,
    border: "1px solid #24cec4"
  },
  btnsContanier: {
    display: "flex"
  },
  drawerHeader: {
    width: "100%",
    display: "flex",
    padding: " 0.5rem 0.5rem 0 0.5rem",
    alignItems: "center"
  },
  drawerAccountInfo: {
    display: "flex",
    alignItems: "center",
    margin: "1rem .5rem"
  },
  drawerContents: {
    fontFamily: "popins",
    fontSize: ".5rem",
    justifyContent: "space-around"
  },
  drawerLinkContainer: {
    display: "flex",
    margin: ".5rem .5rem",
    padding: ".5rem"
  },
  drawerLinkContainerIcon: {
    marginRight: ".5rem"
  },
  logo: {
    outline: "none",
    marginLeft: "0.5rem",
    color: "#24cec4",
    textDecoration: "none"
  },

  menu: {
    width: 40,
    height: 40,
    border: "1px solid #24cec4",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  drawerPaper: {
    zIndex: 1,
    position: "relative",
    width: 300
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 6
  },
  title: {
    fontSize: 13
  }
});

const MyDrawer = withStyles(styles)(({ classes, variant, open, onClose }) => (
  <Router history={history}>
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className="drawer">
        <div className={classes.drawerHeader}>
          <div className={classes.menu} onClick={onClose}>
            <MenuIcon />
          </div>
          <h3>
            <Link className={classes.logo} to="/">
              Shopify
            </Link>
          </h3>
        </div>
        <hr />
        <div className={classes.drawerAccountInfo}>
          <Avatar className={classes.avatar} />
          <div className="btn-container">
            <Typrography className={classes.text} variant="body1">
              Charles Elloit
            </Typrography>
            <div className={classes.btnsContanier}>
              <Button className={classes.btn} variant="outlined">
                Auto Login
              </Button>
              <Button
                className={classes.btn}
                component={Link}
                to="/loginPage"
                variant="outlined"
              >
                Switch Account
              </Button>
            </div>
          </div>
        </div>
        {/* items */}
        <div className={classes.drawerContents}>
          <div className={classes.drawerLinkContainer}>
            <HomeIcon className={classes.drawerLinkContainerIcon} />
            <Typrography className={classes.title} variant="body2">
              Home
            </Typrography>
          </div>
          <div className={classes.drawerLinkContainer}>
            <CategoryIcon className={classes.drawerLinkContainerIcon} />
            <Typrography className={classes.title} variant="body2">
              Category
            </Typrography>
          </div>
          <div className={classes.drawerLinkContainer}>
            <OrderIcon className={classes.drawerLinkContainerIcon} />
            <Typrography className={classes.title} variant="body2">
              Order
            </Typrography>
          </div>
          <div className={classes.drawerLinkContainer}>
            <ReviewsIcon className={classes.drawerLinkContainerIcon} />
            <Typrography className={classes.title} variant="body2">
              Reviews
            </Typrography>
          </div>
          <div className={classes.drawerLinkContainer}>
            <FavoriteIcon className={classes.drawerLinkContainerIcon} />
            <Typrography className={classes.title} variant="body2">
              Wishlist
            </Typrography>
          </div>
          <div className={classes.drawerLinkContainer}>
            <CartIcon className={classes.drawerLinkContainerIcon} />
            <Typrography className={classes.title} variant="body2">
              Cart
            </Typrography>
          </div>
          <div className={classes.drawerLinkContainer}>
            <SortIcon className={classes.drawerLinkContainerIcon} />
            <Typrography className={classes.title} variant="body2">
              Sell on Shopify
            </Typrography>
          </div>
          <div className={classes.drawerLinkContainer}>
            <UserAccountIcon className={classes.drawerLinkContainerIcon} />
            <Typrography className={classes.title} variant="body2">
              My Account
            </Typrography>
          </div>
        </div>

        <Button>Donate</Button>
      </div>
    </Drawer>
  </Router>
));

export default MyDrawer;
