import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PropCard({ property }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={property.name}
        height="200"
        image={property.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {property.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rent | {property.pricing}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Area: {property.features.area}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Beds: {property.features.beds}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Baths: {property.features.baths}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Garages: {property.features.garages}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
