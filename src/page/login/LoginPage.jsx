import React, { useState } from "react";
import classes from "./login.module.css";

import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import logo  from "../../assets/logo.png";

const LoginPage = () => {
  return (
    <div className={classes.loginContainer}>
      <div className={classes.jobbg}>
        <div className="carousel">
        </div>
      </div>
      <div>
        <div className={classes.loginCard}>
          <img src={logo} alt="logo" className={classes.logo} />
          <TextField
            id="outlined-basic"
            size="small"
            label="Email"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Password"
            variant="outlined"
            fullWidth
            margin="dense"
            type="password"
          />
          {/* if error is present then show error */}
          {/* {error != "" && <div style={{ color: "red" }}>{error}</div>} */}
          <Link href="/forgot">
            <div style={{ color: "blue", marginTop: "0.5rem" }}>
              Forget Password{" "}
            </div>
          </Link>

          <Button
            style={{ marginTop: "9rem" }}
            variant="contained"
            component="label"
            fullWidth
            // onClick={handleClick}
            // disabled={loading}
          >
            Log in
          </Button>
        </div>
        <div className={classes.bottomCard}>
          Don't Have an account ?{" "}
          <Link to="/signup">
            <span style={{ color: "blueviolet" }}>Signup</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
