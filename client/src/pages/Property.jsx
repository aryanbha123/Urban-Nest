import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from '../data';
import { Container, Grid, Typography, Card, CardContent, CardMedia, List, ListItem, ListItemText, Tab, Tabs, Box, Button } from '@mui/material';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertiesData.find(p => p.id === id);
  const [tabIndex, setTabIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  if (!property) {
    return <div>Property not found</div>;
  }

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const handleNext = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };

  return (
    <Container id="main" sx={{ marginTop: "8rem" }}>
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {property.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {property.location}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
          
          </Grid>
        </Grid>
      </Box>

      <Box mb={4}>
        <Card>
          <CardMedia component="img" className="h-64" image={property.images[carouselIndex]} alt={`Slide ${carouselIndex}`} />
          <Box display="flex" justifyContent="space-between" p={2}>
            <Button onClick={handlePrev} variant="contained">Previous</Button>
            <Button onClick={handleNext} variant="contained">Next</Button>
          </Box>
        </Card>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="start" alignItems="center" mb={2}>
                <Typography variant="h5">{property.pricing}</Typography>
              </Box>
              <Typography variant="h6">Quick Summary</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Location" secondary={property.location} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Property Type" secondary={property.type} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Status" secondary={property.status} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Area" secondary={`${property.features.area} m²`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Beds" secondary={property.features.beds} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Baths" secondary={property.features.baths} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Garage" secondary={property.features.garages} />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Property Description
              </Typography>
              <Typography paragraph>
                {property.description}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Amenities
              </Typography>
              <List>
                {property.amenities && property.amenities.map((amenity, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={amenity} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Tabs value={tabIndex} onChange={handleTabChange} aria-label="Property Tabs">
          <Tab label="Video" />
          <Tab label="Floor Plans" />
          <Tab label="Ubication" />
        </Tabs>
        <Box p={3}>
          {tabIndex === 0 && (
            <iframe
              src="https://player.vimeo.com/video/73221098"
              width="100%"
              height="460"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
          {tabIndex === 1 && (
            <img src="images/plan2.jpg" alt="Floor Plan" className="img-fluid" />
          )}
          {tabIndex === 2 && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.891329240172!2d-73.99820658418654!3d40.73197827932968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b222c1%3A0x423e9977ac5c858a!2s210%20Avenue%20A%2C%20New%20York%2C%20NY%2010019%2C%20USA!5e0!3m2!1sen!2sbd!4v1562581326537!5m2!1sen!2sbd"
              width="100%"
              height="460"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default PropertyDetails;
