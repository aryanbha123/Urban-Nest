import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import pq from '../assets/pq.jpg';
import { Link } from 'react-router-dom';
import propertiesData from '../data';


export default function Properties() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const filteredProperties = propertiesData.filter((property) => {
    return (selectedType === 'All' || property.type === selectedType) &&
      (selectedLocation === 'All' || property.location === selectedLocation);
  });

  return (
    <div>
      <main id="main" className='mt-32'>
        <section className="intro-single">
          <div className="container mx-auto px-4">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="title-single-box">
                  <h1 className="title-single text-4xl font-bold">Our Amazing Properties</h1>
                  <span className="color-text-a text-gray-600">Urban Nest</span>
                </div>
              </div>
              <div className="col-md-12 col-lg-4"></div>
            </div>
          </div>
        </section>
        <section className="property-grid">
          <div className="container mx-auto px-4">
            <div className="row">
              <Box display="flex" justifyContent="flex-end" gap={2} mb={4}>
                <FormControl variant="outlined" size="small">
                  <InputLabel>Type</InputLabel>
                  <Select
                    value={selectedType}
                    onChange={handleTypeChange}
                    label="Type"
                  >
                    <MenuItem value="All">All Types</MenuItem>
                    <MenuItem value="Villa">Villa</MenuItem>
                    <MenuItem value="Farm house">Farm house</MenuItem>
                    <MenuItem value="Raw house">Raw house</MenuItem>
                    <MenuItem value="Hostel and pg">Hostel and pg</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" size="small">
                  <InputLabel>Location</InputLabel>
                  <Select
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    label="Location"
                  >
                    <MenuItem value="All">All Locations</MenuItem>
                    <MenuItem value="Dehradun">Dehradun</MenuItem>
                    <MenuItem value="Lucknow">Lucknow</MenuItem>
                    <MenuItem value="Unnau">Unnau</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Grid container spacing={3}>
                {filteredProperties.map((property) => (
                  <Grid item xs={12} sm={6} md={4} key={property.id}>
                    <Card>
                      <CardMedia
                        className='card-img'
                        component="img"
                        alt={property.name}
                        height="100"
                        image={property.image}
                        title={property.name}
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
                        <Typography variant="body2" color="primary">
                          <Link to={`../property/${property.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                            Click here to view
                          </Link>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
