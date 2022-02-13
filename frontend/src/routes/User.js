import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TextField from "@material-ui/core/TextField";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import LoginIcon from "@mui/icons-material/Login";
import GoogleIcon from "@mui/icons-material/Google";
import GoogleLogin from "react-google-login";

const createStyles = makeStyles({
  field: {
    marginTop: 40,
    marginBottom: 40,
  },
});

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [like, setLike] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/blog/")
      .then((response) => {
        setBlogs(response.data);
        console.log(response.data);

        setTimeout(function () {}, 5000);

        const list = [];
        for (var i = 0; i < blogs.length; i++) {
          list.push(blogs[i].likes);
        }
        setLike(list);
        console.log(list);
      })
      .catch((error) => {});
  }, []);

  return (
    <Box
      sx={{
        alignItems: "center",
        height: 300,
        width: 1,
        "& .super-app-theme--header": {
          backgroundColor: "rgba(255, 7, 0, 0.55)",
        },
      }}
    >
      <br></br>
      {blogs.map((blog, ind) => {
        return (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography color="text.secondary" variant="h5" component="div">
                {blog.text}
              </Typography>
              <Typography>{blog.name}</Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {blog.college}
              </Typography>
              <Typography variant="body2">{like[ind]}</Typography>
              <Button
                color="primary"
                onClick={() => {
                  const list = [];
                  for (var i = 0; i < like.length; i++) {
                    if (i == ind) list.push(like[i] + 1);
                    else list.push(like[i]);
                  }
                  setLike(list);

                  var _id = blog._id;
                  var likes = blog.likes + 1;

                  axios
                    .post("http://localhost:8000/blog/change-likes", {
                      _id,
                      likes,
                    })
                    .then((response) => {})
                    .catch((error) => {});
                }}
              >
                <ThumbUpIcon></ThumbUpIcon>
              </Button>
              &emsp;
              <Button color="error">
                <ThumbDownAltIcon></ThumbDownAltIcon>
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}
