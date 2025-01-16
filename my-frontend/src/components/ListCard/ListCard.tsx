import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ListCardProps } from "../../interfaces/LocationInterfaces";
import { formatDate } from "../../utils/dateUtils";

const ListCard: React.FC<ListCardProps> = ({ location }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: "0 auto", boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={location.image}
        alt={location.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {location.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Code: {location.code}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created on: {formatDate(location.creationDate)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ListCard;
