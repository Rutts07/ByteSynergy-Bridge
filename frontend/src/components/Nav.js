import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";

function Nav() {
  return (
    <header>
      <div className="Navigator">
        <Box
          sx={{
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Link to="/" style={{ color:'black', textDecoration: 'inherit' }}>
              <Typography>
                <h3>&emsp;&emsp;College Blogs</h3>
              </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Link to="/login">
            <Tooltip TransitionComponent={Zoom} title="Log In" arrow>
              <Button
                sx={{ alignItems: "center", borderRadius: "16px" }}
                size="small"
                variant="contained"
              >
                <LoginIcon>Login</LoginIcon>
              </Button>
            </Tooltip>
          </Link>
        </Box>
        &emsp;
      </div>
    </header>
  );
}

export default Nav;

function createLogin() {
  return (
    <Box
      sx={{ flexShrink: 0, alignItems: "center", justifyContent: "flex-end" }}
    >
      <Link to="/login">
        <Tooltip TransitionComponent={Zoom} title="Log In" arrow>
          <Button size="small" variant="contained" style={{ height: 40 }}>
            <LoginIcon>Login</LoginIcon>
          </Button>
        </Tooltip>
      </Link>
    </Box>
  );
}
