import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

function Login() {
  return (
    <div className="Login">
      <form>
        <div className="form-inner">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Login{" "}
            <LoginIcon
              style={{
                width: "30px",
                height: "30px",
                color: "white",
                marginLeft: "10px",
              }}
            />
          </h2>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
          </div>
          <NavLink to={"/" + "todo"}>
            <button className="button">Login</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login;
