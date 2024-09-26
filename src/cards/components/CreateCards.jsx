
import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createCardApi } from '../services/cardApiService'; 

export default function CreateCard() {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    phone: '',
    email: '',
    web: '',
    imageUrl: '',
    imageAlt: '',
    state: '',
    country: '',
    city: '',
    street: '',
    houseNumber: '',
    zip: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCardApi(formData); 
      navigate('/my-cards');
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  return (
    <Container>
      <h1>Create Card</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField name="title" label="Title" fullWidth required value={formData.title} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="subtitle" label="Subtitle" fullWidth required value={formData.subtitle} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField name="description" label="Description" fullWidth required value={formData.description} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="phone" label="Phone" fullWidth required value={formData.phone} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="email" label="Email" fullWidth required value={formData.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="web" label="Web" fullWidth value={formData.web} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="imageUrl" label="Image URL" fullWidth value={formData.imageUrl} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="imageAlt" label="Image Alt" fullWidth value={formData.imageAlt} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="state" label="State" fullWidth value={formData.state} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="country" label="Country" fullWidth required value={formData.country} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="city" label="City" fullWidth required value={formData.city} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="street" label="Street" fullWidth required value={formData.street} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="houseNumber" label="House Number" fullWidth required value={formData.houseNumber} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="zip" label="Zip" fullWidth required value={formData.zip} onChange={handleChange} />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </form>
    </Container>
  );
}
