import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Container, Grid, Typography, Button, Card, CardMedia
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckIcon from '@mui/icons-material/Check';
import Footer from './Footer'; // Import the Footer component
import RDHomeAppBar from './RDHomeAppBar'; // Import RDHomeAppBar 

// Mock data - replace with actual data fetching logic
const productData = {
  '1': {
    id: '1',
    name: 'Gang Spray System',
    category: 'Script',
    price: '35.00 GBP',
    image: 'https://via.placeholder.com/500',
    description: 'A comprehensive gang territory management system for your FiveM server.',
    connectionInstructions: 'Manual Connect : wecreateserver.com in your client FB console fivem command /setped codename to spawn the ped.',
    videoThumbnail: 'https://via.placeholder.com/1280x720',
    buyEscrowLink: 'https://example.com/buy/gang-spray-system/escrow',
    buyOpenSourceLink: 'https://example.com/buy/gang-spray-system/open-source',
    connectLink: 'https://example.com/connect/gang-spray-system',
    features: [
      'Dynamic territory control',
      'Customizable spray patterns',
      'Integrated gang warfare mechanics',
      'Leaderboard and statistics tracking'
    ]
  },
  '2': {
    id: '2',
    name: 'Advanced Police MDT',
    category: 'Script',
    price: '45.00 GBP',
    image: 'https://via.placeholder.com/500',
    description: 'A feature-rich Mobile Data Terminal (MDT) system for law enforcement roleplay.',
    connectionInstructions: 'Connect to our test server at policemdttest.wecreateserver.com and use the command /mdt to access the system.',
    videoThumbnail: 'https://via.placeholder.com/1280x720',
    connectLink: 'https://example.com/connect/advanced-police-mdt',
    isAvailableSoon: true,
    features: [
      'Real-time criminal database',
      'Vehicle registration lookup',
      'Integrated dispatch system',
      'Officer status management',
      'Customizable report templates'
    ]
  }
};

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = productData[id as keyof typeof productData];

  const handleBuy = (buyLink: string) => {
    window.open(buyLink, '_blank', 'noopener,noreferrer');
  };

  const handleConnect = () => {
    window.open(product.connectLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // Ensure the content takes at least the full viewport height
      color: '#fff', 
      pt: { xs: 12, sm: 12 },
      pb: 4 
    }}>
      <RDHomeAppBar /> {/* Add RDHomeAppBar here */}
      <Container maxWidth="lg" sx={{ flex: 1 }}> {/* Add flex: 1 to push footer to bottom */}
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
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              {product.id === '1' ? (
                <>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{ 
                      backgroundColor: '#ff9800',
                      '&:hover': { backgroundColor: '#ffcc00' },
                    }}
                    onClick={() => handleBuy(product.buyEscrowLink)}
                  >
                    Buy Escrow
                  </Button>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{ 
                      backgroundColor: '#ff9800',
                      '&:hover': { backgroundColor: '#ffcc00' },
                    }}
                    onClick={() => handleBuy(product.buyOpenSourceLink)}
                  >
                    Buy Open Source
                  </Button>
                </>
              ) : (
                <Button 
                  variant="contained" 
                  fullWidth 
                  sx={{ 
                    backgroundColor: '#ff9800',
                    '&:hover': { backgroundColor: '#ffcc00' },
                  }}
                  onClick={() => window.open('https://discord.gg/wecreate', '_blank', 'noopener,noreferrer')}
                >
                  Available Soon
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Features Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>Features</Typography>
          <Grid container spacing={2}>
            {product.features.map((feature, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckIcon sx={{ color: '#ff9800', mr: 2 }} />
                  <Typography>{feature}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

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
            {product.name}
          </Typography>
        </Box>
      </Container>
      <Footer /> {/* Add the Footer component here */}
    </Box>
  );
}