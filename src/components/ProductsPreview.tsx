import * as React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
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
    buyNowLink: 'https://example.com/buy/gang-spray-system',
  },
];

export default function ProductsPreview() {
  const navigate = useNavigate();

  const handleBuyNow = (buyNowLink: string) => {
    window.open(buyNowLink, '_blank', 'noopener,noreferrer');
  };

  const handleDetails = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 12, sm: 15 }, // Increased padding-top for mobile
        pb: { xs: 12, sm: 24 },
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            mb: { xs: 6, sm: 5 }, // Increased margin-bottom for mobile
            mt: { xs: 4, sm: 0 },
            fontWeight: 'bold',
            alignSelf: 'flex-start',
          }}
        >
          Our Products
        </Typography>
        <Grid container spacing={3}>
          {items.map(({ id, image, title, category, price, buyNowLink }, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  color: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  mt: { xs: 4, sm: 0 }, // Added margin-top for mobile
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
                <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    {category}
                  </Typography>
                  <Typography variant="h6" component="h3" sx={{ mb: 0.5, lineHeight: 1.2 }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {price}
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button 
                        variant="contained" 
                        size="small"
                        sx={{ 
                          flex: 1,
                          backgroundColor: '#ff9800',
                          color: '#fff',
                          '&:hover': { backgroundColor: '#ffcc00' },
                          fontSize: '0.75rem',
                          padding: '4px 8px',
                        }}
                        onClick={() => handleBuyNow(buyNowLink)}
                      >
                        Buy Now
                      </Button>
                      {id === '1' && (
                        <Button 
                          variant="outlined" 
                          size="small"
                          sx={{ 
                            flex: 1,
                            borderColor: '#ff9800',
                            color: '#ff9800',
                            '&:hover': { borderColor: '#ffcc00', color: '#ffcc00' },
                            fontSize: '0.75rem',
                            padding: '4px 8px',
                          }}
                          onClick={() => handleDetails(id)}
                        >
                          Details
                        </Button>
                      )}
                    </Box>
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