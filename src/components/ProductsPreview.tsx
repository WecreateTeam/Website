import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const items = [
  {
    id: '1',
    image: 'https://via.placeholder.com/150',
    title: 'Gang Spray System',
    category: 'Script',
    price: '35.00 GBP',
  },
];

export default function ProductsPreview() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 4, sm: 8 },
        pb: { xs: 12, sm: 24 },
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ mb: 5, fontWeight: 'bold', alignSelf: 'flex-start' }}
        >
          Our Products
        </Typography>
        <Grid container spacing={3}>
          {items.map(({ id, image, title, category, price }, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  color: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
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
                      component={RouterLink}
                      to={`/product/${id}`}
                      variant="contained" 
                      sx={{ 
                        backgroundColor: '#ff9800',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#ffcc00' },
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
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button
            component={RouterLink}
            to="/products"
            sx={{
              color: '#ff9800',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: 'rgba(255, 152, 0, 0.08)' },
            }}
          >
            Explore More
          </Button>
        </Box>
      </Container>
    </Box>
  );
}