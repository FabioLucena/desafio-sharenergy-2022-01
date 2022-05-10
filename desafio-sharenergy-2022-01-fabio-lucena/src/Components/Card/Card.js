import React from "react";
import { ContainerCard, Img } from "./Styled";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard(props) {
    return (
      <Card sx={{ maxWidth: 345, backgroundColor: '#3f51b5' }}>
        <CardActionArea >
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt="News Image"
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.publishedAt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

