import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"
import Item from "@mui/material/Grid"
import logo from './logo.jfif';
import bg1 from './bg-1.png';

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
          <img src={logo} alt="logo" width="100px" height="100px"/>
          <Link to="/" style={{ color:'black', textDecoration: 'inherit' }}>
              <Typography>
                <h2>&emsp;&emsp;College Blogs</h2>
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

        <Box
          sx={{
            flexShrink: 0,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Link to="/register">
            <Tooltip TransitionComponent={Zoom} title="Register" arrow>
              <Button
                sx={{ alignItems: "center", borderRadius: "16px" }}
                size="small"
                variant="contained"
              >
                <LoginIcon>Register</LoginIcon>
              </Button>
            </Tooltip>
          </Link>
        </Box>
        
        &emsp;
      </div>
      <div className="container">
      <Grid container spacing={3} sx={{ display: 'flex',flexDirection: "row", justifyContent: "flex-end",flexWrap:"no-wrap",padding:"10px"}}>
        <Grid item xs sx={{padding:"10px"}}>
          <Item>
              <Typography>
                <h3>&emsp;&emsp;A Word from the Creators</h3>
              </Typography>
              <Typography variant="body2" gutterBottom>
Thank you for checking out Bridge!
We are glad to be the first creators of one such website.  We tried our hands on this project as we as students find it difficult to manage and keep a track of events and happenings of other colleges, we are interested in. 
That's where BRIDGE comes in.
Looking ahead, we plan to accelerate the implementation of our expansion strategy while maintaining the strength of our website—in assisting our clients in sharing information and creating innovation, as well as delivering positive change to the communities in which we work and live. We're very thrilled about this journey and believe the best is yet to come for BRIDGE.
              </Typography>
            
          </Item>
        </Grid>
        <Grid item xs sx={{padding:"10px"}}>
          <Item><Typography>
                <h3>&emsp;&emsp;How to Use?</h3>
              </Typography>
              <Typography variant="body2" gutterBottom>
                
Bridge is a website that can be used by anyone with a stable internet connection and a working device. Just follow along and explore. 
1)	If you are a new member, WELCOME, kindly register and join the exploration.
2)	If you are already a member, WELCOME BACK, loggin and continue your exploration.

              </Typography>
        </Item>
        </Grid>
        <Grid item xs sx={{padding:"10px"}}>
          <Item>
          <Typography>
                <h3>&emsp;&emsp;Purpose</h3>
              </Typography>
              <Typography variant="body2" gutterBottom>

            Our aim is to BRIDGE THE GAP between universities and a student. We have created a website that allows colleges to post about the events, hackathons, and in general any important news of their college which has to be conveyed to a mass populace.

              </Typography>
          </Item>
        </Grid>
    </Grid>
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
