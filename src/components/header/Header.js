import React, { useState } from "react";
import { Link } from "react-router-dom";

//Icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import MenuIcon from "@material-ui/icons/SortRounded";

//Custom components
import SearchInput from "../SearchInput";
import MyDrawer from "../Drawer";
import "./header.css";

function Header({ variant }) {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = () => {
    setDrawer(variant === "temporary" ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <header>
      <div className="header-bar">
        <div className="menu__logo">
          <div className="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </div>
          <h3>
            <Link to="/">Shopify</Link>
          </h3>
        </div>
        <Link to="/cart">
          <ShoppingCartIcon />
        </Link>
      </div>
      <SearchInput />
      <MyDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
        variant={variant}
      />
    </header>
  );
}

export default Header;
