import React from "react";
import PropsType from "prop-types";
import Typography from "@material-ui/core/Typography";

export default function Category(props) {
  const { title, Icon } = props;
  return (
    <div className=" category">
      <div className="mobile">
        <Icon />
      </div>
      <div className="category-title">
        <Typography variant="caption">{title}</Typography>
      </div>
    </div>
  );
}

Category.propTypes = {
  title: PropsType.string.isRequired
};
