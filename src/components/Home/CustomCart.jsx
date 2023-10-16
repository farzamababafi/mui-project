import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import AddButton from "./AddButton";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";

export default function RecipeReviewCard() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const likeButtonHandle = () => {
    setLike(!like);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={likeButtonHandle} aria-label="add to favorites">
          <FavoriteIcon style={{ color: like && "red" }} />
        </IconButton>
        <AddButton count={count} setCount={setCount} />
      </CardActions>
    </Card>
  );
}
