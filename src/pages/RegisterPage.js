import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import "./loginPage.css";

export default function RegisterPage() {
  return (
    <>
      <div className="login-page">
        <h3>Sign Up</h3>
        <div className="login-form">
          <Input
            type="email"
            autoCapitalize
            placeholder="aciforcharles@gmail.com"
          />
          <Input type="text" placeholder="Phone No" />
          <Input type="password" placeholder="password" />
        </div>
        <div className="centered">
          <Button className="login-btn" variant="contained">
            Sign up
          </Button>
        </div>
        <div className="register-forgot-password">
          <Link to="/loginPage">Login</Link>
        </div>
        <div className="social-media-login centered">
          <div className="centered">
            <span>Or</span>
          </div>
          <div className="center">
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div className="privacy-terms-condition centered">
        <Link to="/privacy">Privacy</Link>
        <Link to="/privacy">Terms</Link>
        <Link to="/privacy">Condition</Link>
      </div>
    </>
  );
}
