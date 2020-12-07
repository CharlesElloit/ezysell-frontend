import React from "react";
import { Input } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./loginPage.css";

export default function RegisterPage() {
  return (
    <>
      <div className="forgot-password">
        <h3>Forgot Password</h3>
        <div className="intro-forgotPassword-text">
          <span>Don't worry, we got you covered!</span>
          <span>Email will be sent to the account you provided</span>
        </div>
        <div className="login-form">
          <Input
            type="email"
            autoCapitalize
            placeholder="aciforcharles@gmail.com"
          />
        </div>
        <div className="centered">
          <Button className="login-btn" variant="contained">
            Send
          </Button>
        </div>
        <div className="register-forgot-password">
          <Link to="/loginPage">Login</Link>
        </div>
      </div>
    </>
  );
}
