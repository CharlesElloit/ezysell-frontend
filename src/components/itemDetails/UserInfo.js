import React from "react";
import Avatar from "@material-ui/core/Avatar";
import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

export default function UserInfo() {
  return (
    <div className="seller">
      <div className="seller-info">
        <div className="seller-name__membership">
          <Avatar
            src="https://cdn.dribbble.com/users/1803852/avatars/normal/b9cd1ed7e6bcf7264d1c5efd30f898cd.jpg?1600295141"
            alt="avatar"
          />
          <div className="seller-name__membership-container">
            <h4>mohamed el shamy</h4>
            <span>longtime member</span>
          </div>
        </div>
        <div className="seller-info-contact">
          <WhatsAppIcon className="whatsAppIcon" />
          <PhoneIcon />
        </div>
      </div>
    </div>
  );
}
