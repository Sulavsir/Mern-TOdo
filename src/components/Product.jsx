import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Ecom from "../assets/nike.jpg";


export default function Product() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={Ecom}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nike Jordan 
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure esse fuga ratione repellat exercitationem nulla nihil id odit ex, consequatur in. Voluptates tempore cumque ullam, nam atque necessitatibus adipisci officia.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
