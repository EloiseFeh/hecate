import "../style/library.css";
// import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Parse from "parse/dist/parse.min.js";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function Library() {
  const [posts, setPosts] = useState(null);

  async function getPosts() {
    const query = new Parse.Query("Post");
    let queryResult = await query.findAll();
    console.log("posts: ", queryResult);

    setPosts(queryResult);
  }

  useEffect(() => {
    getPosts();
  }, []);

  console.log(setPosts);

  return (
    <div className="body-container">
      <div className="header">
        <label>Biblioteca Hecate</label>
      </div>
      <div className="container">
        {posts !== null &&
          posts.map((post, i) => {
            return (
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={post.get("cover")._url}
                  alt="post image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {`Name: ${post.get("title")}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Autor: ${post.get("author")}`}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
