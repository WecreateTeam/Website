import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

// Assuming you have more items in your actual data
const items = [
  {
    id: '1',
    image: 'https://via.placeholder.com/150',
    title: 'Gang Spray System',
    category: 'Script',
    price: '35.00 GBP',
  },
  // Add more items here...
];

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [products, setproducts] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleProductClick = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <Box sx={{ color: '#fff', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
          Script
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <TextField
            placeholder="Search..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ 
              width: '30%',
              borderRadius: '4px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#444' },
                '&:hover fieldset': { borderColor: '#666' },
                '&.Mui-focused fieldset': { borderColor: '#888' },
              },
              '& .MuiInputBase-input': { color: '#fff' },
            }}
          />
          <FormControl variant="outlined" sx={{ width: '30%' }}>
            <InputLabel id="products-label" sx={{ color: '#888' }}>All Products</InputLabel>
            <Select
              labelId="products-label"
              value={products}
              onChange={(e) => setproducts(e.target.value)}
              label="All Products"
              sx={{ 

                color: '#fff',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#888' },
              }}
            >
              <MenuItem value="">All products</MenuItem>
              <MenuItem value="male">Scripts</MenuItem>
              <MenuItem value="female">MLOs</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ width: '30%' }}>
            <InputLabel id="category-label" sx={{ color: '#888' }}>All Categories</InputLabel>
            <Select
              labelId="category-label"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="All Categories"
              sx={{ 
                color: '#fff',
                backgroundColor: '#2a2a2a',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#888' },
              }}
            >
              <MenuItem value="">All Categories</MenuItem>
              <MenuItem value="civilian">Civilian</MenuItem>
              <MenuItem value="gang">Gang</MenuItem>
              <MenuItem value="police">Police</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Grid container spacing={3}>
          {items.map(({ id, image, title, category, price }, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{
                  color: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onClick={() => handleProductClick(id)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={image}
                  alt={title}
                />
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    top: 8, 
                    right: 8, 
                    backgroundColor: '#ff9800',
                    color: '#000',
                    borderRadius: '4px',
                    px: 1,
                    py: 0.5,
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    zIndex: 1,
                  }}
                >
                  NEW RELEASE
                </Box>
                <CardContent sx={{ p: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {category}
                  </Typography>
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                    {title}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <Button 
                      variant="contained" 
                      sx={{ 
                        backgroundColor: '#ff9800',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#ffcc00' },
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(id);
                      }}
                    >
                      Buy Now
                    </Button>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {price}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}