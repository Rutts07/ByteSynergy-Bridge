import React, { Component, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import LoginIcon from "@mui/icons-material/Login";

const createStyles = makeStyles({
  field: {
    marginTop: 40,
    marginBottom: 40,
  },
});

function UserLogin() {
  const [email, setEmail] = useState("");
  const [_id, set_id] = useState("");
  const [password, setPassword] = useState("");

  const resetInputs = () => {
    setEmail("");
    setPassword("");
  };

  function ShowUserLogin() {
    return (
      <Link
        to={{
          pathname: "/user/" + _id,
        }}
      >
        <Button>
          <Tooltip TransitionComponent={Zoom} title="Log In" arrow>
            <Button
              type="submit"
              color="success"
              sx={{ alignItems: "center" }}
              variant="contained"
            >
              <LoginIcon></LoginIcon>
            </Button>
          </Tooltip>
        </Button>
      </Link>
    );
  }

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [hideLogin, setHideLogin] = useState(false);

  const useStyles = createStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == "") setEmailError(true);

    if (password == "") setPasswordError(true);

    if (email.length && password.length) {
      const User = {
        email: email,
        password: password,
      };

      axios
        .post("http://localhost:8000/user/login", User)
        .then((response) => {
          alert(response.data.name + ", Your credentials have been verified !");
          setHideLogin(true);

          const User_Email = {
            email: email,
          };

          axios
            .post("http://localhost:8000/user/_id", User_Email)
            .then((response) => {
              set_id(response.data);
            });
          resetInputs();
        })
        .catch(function (err) {
          alert("Invalid user name or password !");
        });
    } else alert("Invalid user name or password !");
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
        borderRadius={16}
      >
        <Typography>LOGIN</Typography>
        <br></br>
        <Grid
          item
          xs={8}
          style={({ border: "2px solid" }, { minWidth: "100vh" })}
        >
          <form noValidate autoComplete="off">
            <TextField
              value={email}
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
            <TextField
              value={password}
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
          <br></br>
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            color="success"
          >
            Login
          </Button>
          {hideLogin ? <ShowUserLogin></ShowUserLogin> : null}
          <br></br>
          <br></br>
        </Grid>
      </Grid>
    </div>
  );
}

export default function Login() {
  const [logBuy, setShowLogBuy] = useState(false);

  return (
    <Box
      sx={{
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <br></br>
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
      </Box>
      <UserLogin></UserLogin>
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
          &emsp; Don't have an account ? &emsp;
          <Link to="/register" style={{ textDecoration: "inherit" }}>
            <Button
              type="submit"
              variant="contained"
              size="small"
              color="primary"
            >
              Sign Up
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