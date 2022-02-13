import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import CachedIcon from "@mui/icons-material/Cached";

const createStyles = makeStyles({
  field: {
    marginTop: 40,
    marginBottom: 40,
  },
});

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [college, setCollege] = useState("");
  const [password, setPassword] = useState("");

  const resetInputs = () => {
    setName("");
    setEmail("");
    setCollege("");
    setPassword("");
  };

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [collegeError, setCollegeError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const useStyles = createStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name == "") setNameError(true);
    if (email == "") setEmailError(true);
    if (college == "") setCollegeError(true);
    if (password == "") setPasswordError(true);
    else {
      const User = {
        name: name,
        email: email,
        college: college,
        karma: 0,
        password: password
      };

      axios
        .post("http://localhost:8000/user/register", User)
        .then((response) => {
          alert(
            response.data.name + " , you have been registered successfully ! Please Login Now."
          );
          console.log(response.data);
        })
        .catch((err) => {
          alert("Account Already exists ! Please Login.");
          console.log(err);
        });

      resetInputs();
    }
  };

  return (
    <div className="Login">
      <Grid
        container
        align="center"
        justify="center"
        alignItems="center"
        spacing={0}
        direction="column"
        alignItems="center"
        className={useStyles.field}
        sx={{ borderRadius: 16 }}
      >
        <Typography>REGISTER</Typography>
        <br></br>
        <Grid
          item
          xs={8}
          style={({ border: "2px solid" }, { minWidth: "100vh" })}
        >
          <form noValidate autoComplete="off">
            <TextField
              value={name}
              size="small"
              onChange={(e) => setName(e.target.value)}
              label="Name"
              type="text"
              variant="outlined"
              color="primary"
              required
              error={nameError}
            />
            <br></br>
            <br></br>
            <TextField
              value={email}
              size="small"
              onChange={(e) => setEmail(e.target.value)}
              label="Email ID"
              type="text"
              variant="outlined"
              color="primary"
              required
              error={emailError}
            />
            <br></br>
            <br></br>
            <Box
              sx={{
                "& > :not(style)": { m: 1 },
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
              }}
            >
              <TextField
                value={college}
                disabled
                size="small"
                onChange={(e) => setCollege(e.target.value)}
                label="Select College"
                variant="outlined"
                color="primary"
                required
                error={collegeError}
              />
              <br></br>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={function () {
                  setCollege("IIIT-B");
                }}
              >
                IIIT-B
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={function () {
                  setCollege("IIIT-H");
                }}
              >
                IIIT-H
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={function () {
                  setCollege("DSCE");
                }}
              >
                DSCE
              </Button>
            </Box>
            <br></br>
            <TextField
              value={password}
              size="small"
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              variant="outlined"
              color="primary"
              htmlFor="standard-adornment-password"
              required
              error={passwordError}
            />
          </form>
          <br></br>
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            color="success"
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default function UserRegister() {
  return (
    <Box
      sx={{
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <Register></Register>
      <br></br>
      <Grid
        container
        align="center"
        justify="center"
        alignItems="center"
        spacing={0}
        direction="column"
        alignItems="center"
        sx={{ borderRadius: 16 }}
      >
        <Grid
          item
          xs={10}
          style={{
            border: "2px solid",
            borderColor: "primary.main",
            borderRadius: "5px",
          }}
        >
          <br></br>
          &emsp; Already have an account ? &emsp;
          <Link to="/login" style= {{ textDecoration: "inherit"}}>
            <Button
              type="submit"
              variant="contained"
              size="small"
              color="primary"
            >
              Login
            </Button>
          </Link>
          &emsp;
          <br></br>
          <br></br>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
    </Box>
  );
}
