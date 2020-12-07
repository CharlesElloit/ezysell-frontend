import React from "react";
// import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import CarIcon from "@material-ui/icons/LocalTaxiOutlined";
import DesktopIcon from "@material-ui/icons/DesktopWindows";
import MobileIcon from "@material-ui/icons/PhoneIphoneSharp";
import BabyIcon from "@material-ui/icons/ChildCareOutlined";
import CameraIcon from "@material-ui/icons/CameraAltOutlined";

import Category from "./Category";

export default function Categories() {
  return (
    <div className="categories">
      <div className="categories-title">
        {/* <h3>Categories</h3>
        <Link to="/seeall">See all</Link> */}
      </div>
      <div className="categories-container">
        <div className="categories-items">
          <Category title="Mobiles" Icon={MobileIcon} />
          <Category title="Electronics" Icon={DesktopIcon} />
          <Category title="Properties" Icon={HomeIcon} />
          <Category title="Camera" Icon={CameraIcon} />
          <Category title="Vehicles" Icon={CarIcon} />
          <Category title="Mobiles" Icon={MobileIcon} />
          <Category title="Electronics" Icon={DesktopIcon} />
          <Category title="Properties" Icon={HomeIcon} />
          <Category title="ChildCare" Icon={BabyIcon} />
          <Category title="Vehicles" Icon={CarIcon} />
        </div>
      </div>
    </div>
  );
}
