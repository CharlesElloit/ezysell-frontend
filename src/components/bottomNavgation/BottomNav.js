import React from "react";
import { Link } from "react-router-dom";

//MUI Staff
import Typography from "@material-ui/core/Typography";

//MUI Icons
import HomeIcon from "@material-ui/icons/Home";
import MessagesIcon from "@material-ui/icons/ChatRounded";
import StarIcon from "@material-ui/icons/StarBorderOutlined";
import UserAccountIcon from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";

import "./BottomNav.css";

export default function bottomNav() {
  return (
    <div className="bottom-tab-navigation">
      <div className="navigation-icons">
        <div className="home">
          <Typography variant="caption" to="/" component={Link}>
            <HomeIcon />
            Home
          </Typography>
        </div>
        <div className="home">
          <Typography variant="caption" to="/" component={Link}>
            <MessagesIcon />
            Messages
          </Typography>
        </div>
        <div className="add">
          <Typography variant="h4" component={Link} to="/additem">
            <AddIcon />
          </Typography>
        </div>
        <div className="account">
          <Typography variant="caption" component={Link} to="/account">
            <StarIcon />
            Favorites
          </Typography>
        </div>
        <div className="account">
          <Typography variant="caption" component={Link} to="/account">
            <UserAccountIcon />
            Account
          </Typography>
        </div>
      </div>
    </div>
  );
}
