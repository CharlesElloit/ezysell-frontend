import React from "react";
import { Link } from "react-router-dom";

//MUI Staff
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

//icons
import AddIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import ViewIcon from "@material-ui/icons/ViewListSharp";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowRightIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import AccountIcon from "@material-ui/icons/AccountCircleOutlined";

//Custom components
import profileImage from "../images/profile.jpg";

const useStyles = makeStyles({
  actions: {
    width: "90%",
    margin: "0 auto"
  },
  arrowRight: {
    fontSize: 15,
    float: "right",
    color: "#c9c9c9"
  },
  header: {
    padding: 5,
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd"
  },
  icon: {
    width: 40,
    fontSize: 30,
    color: "#093438"
    // color: "#24cec4"
  },
  img: {
    width: 100,
    height: 100,
    marginTop: 17,
    borderRadius: 50,
    background: "#eee",
    objectFit: "cover",
    border: "1px solid #24cec4"
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // background: "#fff",
    justifyContent: "center"
  },
  main: {
    paddingTop: 5
  },
  name: {
    color: "#093438"
  },
  card: {
    padding: 10,
    margin: "10px 0",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-between"
  },
  text: {
    marginTop: 4
  },
  title: {
    margin: "28px 0 0 5px"
  }
});

export default function AccountScreen(props) {
  const classes = useStyles();

  const handleGoBack = () => {
    props.history.goBack();
  };

  return (
    <div>
      <div className={classes.header}>
        <IconButton onClick={handleGoBack}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </div>
      <div className={classes.main}>
        <Link to="/login">
          <div className={classes.profile}>
            <img
              alt="profileImage"
              src={profileImage}
              className={classes.img}
            />
            <Typography variant="subtitle1" className={classes.name}>
              Joyice Smith
            </Typography>
          </div>
        </Link>
      </div>
      <div className={classes.actions}>
        <Typography className={classes.title}>Account</Typography>
        <Link to="/login">
          <Paper className={classes.card}>
            <div style={{ display: "flex" }}>
              <AccountIcon className={classes.icon} />
              <Typography variant="caption" className={classes.text}>
                Update Account info
              </Typography>
            </div>
            <div>
              <ArrowRightIcon className={classes.arrowRight} />
            </div>
          </Paper>
        </Link>
        <Paper className={classes.card}>
          <div style={{ display: "flex" }}>
            <AccountIcon className={classes.icon} />
            <Typography variant="caption" className={classes.text}>
              Become a seller
            </Typography>
          </div>
          <div>
            <ArrowRightIcon className={classes.arrowRight} />
          </div>
        </Paper>

        <Typography className={classes.title}>Store</Typography>
        <Link to="/login">
          <Paper className={classes.card}>
            <div style={{ display: "flex" }}>
              <AddIcon className={classes.icon} />
              <Typography variant="caption" className={classes.text}>
                Create a Store
              </Typography>
            </div>
            <div>
              <ArrowRightIcon className={classes.arrowRight} />
            </div>
          </Paper>
        </Link>

        <Paper className={classes.card}>
          <div style={{ display: "flex" }}>
            <ViewIcon className={classes.icon} />
            <Typography variant="caption" className={classes.text}>
              View Stores
            </Typography>
          </div>
          <div>
            <ArrowRightIcon className={classes.arrowRight} />
          </div>
        </Paper>
      </div>
    </div>
  );
}
