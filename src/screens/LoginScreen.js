import React from "react";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

function LoginScreen() {
  const handleRedirect = path => {
    Redirect(path);
    console.log("Hey there");
  };
  return (
    <div className="login-screen">
      <span>Login first</span>
      <Button variant="contained" onClick={() => handleRedirect("/login")}>
        Login
      </Button>
    </div>
  );
}

export default LoginScreen;
