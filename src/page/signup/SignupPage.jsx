import React, { useState } from "react";
import classes from "./signup.module.css";

import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import logo  from "../../assets/logo.png";


const SignupPage = () => {
  return (
    <div className={classes.signupContainer}>
      <div className={classes.signupCard}>
      <img src={logo} alt="logo" className={classes.logo} />
        <TextField
          id="outlined-basic"
          size="small"
          label="Email"
          variant="outlined"
          fullWidth
          margin="dense"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          size="small"
          label="Password"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          size="small"
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="dense"
          // value={fullName}
          // onChange={(e) => setFullName(e.target.value)}
        />
        <Button
          color="secondary"
          variant="outlined"
          component="label"
          fullWidth
          size="small"
        >
          Upload Profile Image
          <input
            hidden
            accept="image/*"
            type="file"
            // onChange={(e) => {
            //   setFile(e.target.files[0]);
            // }}
          />
          {/* <IconButton color="secondary">
            <CloudUploadIcon />
            </IconButton> */}
          {/* </input> */}
        </Button>

        <Button
          style={{ marginTop: "1rem" }}
          variant="contained"
          component="label"
          fullWidth
          // onClick={handleClick}
        >
          Sign Up
        </Button>
        {/* {error != "" && <div style={{ color: "red" }}>{error}</div>} */}
        <div className={classes.tnc}>
          By signing up, you agree to our Terms, Conditions and Cookies policy.
        </div>
      </div>
      <div className="bottom-card">
        Already Have an account ?{" "}
        <Link to="/login">
          <span style={{ color: "blueviolet" }}>Login</span>
        </Link>
      </div>
    </div>
  );
}

export default SignupPage