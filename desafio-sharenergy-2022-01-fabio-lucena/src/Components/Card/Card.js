import React from "react";
import { ContainerCard, Img } from "./Styled";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { GoToDetailsPage } from "../../Routes/RouteFunctions";
import { useNavigate, useParams } from "react-router-dom";
import { useRequest } from "../CustomHooks/UseRequest";


export default function ActionAreaCard(props) {
    const navigate = useNavigate()
    

    return (
      <Card sx={{ maxWidth: 345, backgroundColor: '#3f51b5' }} onClick={()=>GoToDetailsPage(navigate, props.id)}>
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

