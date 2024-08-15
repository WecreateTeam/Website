import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Container, Grid, Typography, Button, Card, CardMedia
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckIcon from '@mui/icons-material/Check';

// Mock data - replace with actual data fetching logic
const productData = {
  id: '1',
  name: 'Gang Spray System',
  category: 'Script',
  price: '34.31 GBP',
  image: 'https://via.placeholder.com/500',
  description: 'Feel free to test it before purchasing, Using our test server',
  connectionInstructions: 'Manual Connect : wecreateserver.com in your client FB console fivem command /setped codename to spawn the ped.',
  videoThumbnail: 'https://via.placeholder.com/1280x720',
  buyNowLink: 'https://example.com/buy/gang-spray-system',
  connectLink: 'https://example.com/connect/gang-spray-system',
};

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  // In a real app, you would fetch the product data based on the id
  const product = productData;

  const handleBuyNow = () => {
    window.open(product.buyNowLink, '_blank', 'noopener,noreferrer');
  };

  const handleConnect = () => {
    window.open(product.connectLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box sx={{ 
      backgroundColor: '#1a1a1a', 
      color: '#fff', 
      minHeight: '100vh', 
      pt: { xs: 8, sm: 12 }, // Add top padding to push content down
      pb: 4 
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '12px' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>{product.name}</Typography>
            <Typography variant="subtitle1" gutterBottom>{product.category}</Typography>
            <Typography variant="h5" gutterBottom sx={{ color: '#ff9800' }}>{product.price}</Typography>
            <Typography variant="body1" paragraph>{product.description}</Typography>
            <Button 
              variant="outlined" 
              size="small"
              sx={{ mb: 2, color: '#ff9800', borderColor: '#ff9800' }}
              onClick={handleConnect}
            >
              CONNECT
            </Button>
            <Typography variant="body2" paragraph>{product.connectionInstructions}</Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Button 
                variant="outlined" 
                size="small" 
                color="success"
                startIcon={<CheckIcon />}
              >
                Escrow Protected
              </Button>
              <Button 
                variant="outlined" 
                size="small" 
                color="info"
                startIcon={<CheckIcon />}
              >
                ESX
              </Button>
              <Button 
                variant="outlined" 
                size="small" 
                color="info"
                startIcon={<CheckIcon />}
              >
                QBCore
              </Button>
            </Box>
            <Button 
              variant="contained" 
              fullWidth 
              sx={{ mt: 2 }}
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
          </Grid>
        </Grid>

        {/* Video Placeholder */}
        <Box sx={{ mt: 8, position: 'relative', cursor: 'pointer' }}>
          <img 
            src={product.videoThumbnail} 
            alt="Video thumbnail" 
            style={{ width: '100%', borderRadius: '12px' }} 
          />
          <Box 
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0,0,0,0.7)',
              borderRadius: '50%',
              width: 80,
              height: 80,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PlayArrowIcon sx={{ fontSize: 50, color: '#fff' }} />
          </Box>
          <Typography 
            variant="h2" 
            sx={{ 
              position: 'absolute', 
              bottom: 20, 
              left: 20, 
              color: '#fff', 
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Gang Spray System
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}