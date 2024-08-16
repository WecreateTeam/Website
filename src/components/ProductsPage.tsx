import React, { useState, useMemo } from 'react';
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
import Footer from './Footer'; // Import the Footer component
import RDHomeAppBar from './RDHomeAppBar'; // Import RDHomeAppBar

const items = [
  {
    id: '1',
    image: 'https://via.placeholder.com/150',
    title: 'Gang Spray System',
    category: 'Script',
    price: '35.00 GBP',
    type: 'gang',
    tag: 'NEW RELEASE',
    description: 'A comprehensive gang territory management system for your FiveM server.',
    features: [
      'Dynamic territory control',
      'Customizable spray patterns',
      'Integrated gang warfare mechanics',
      'Leaderboard and statistics tracking'
    ],
    isAvailable: true,
    buyNowLink: 'https://example.com/buy/gang-spray-system'
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/150',
    title: 'Mirror Park Police Station',
    category: 'MLO',
    price: '50.00 GBP',
    type: 'police',
    tag: 'COMING SOON',
    description: 'A feature-rich Mobile Data Terminal (MDT) system for law enforcement roleplay.',
    features: [
      'Real-time criminal database',
      'Vehicle registration lookup',
      'Integrated dispatch system',
      'Officer status management',
      'Customizable report templates'
    ],
    isAvailable: false
  }
];

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [productType, setProductType] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleProductClick = (id: string) => {
    navigate(`/product/${id}`);
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
      const matchesProductType = productType === '' || item.category.toLowerCase() === productType.toLowerCase();
      const matchesCategory = category === '' || item.type.toLowerCase() === category.toLowerCase();
      return matchesSearch && matchesProductType && matchesCategory;
    });
  }, [search, productType, category]);

  const handleBuyNow = (item) => {
    if (item.isAvailable) {
      if (item.id === '1') {
        navigate(`/product/${item.id}`);
      } else if (item.buyNowLink) {
        window.open(item.buyNowLink, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const handleDetails = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/product/${id}`);
  };

  const handleAvailableSoon = () => {
    window.open('https://discord.gg/wecreate', '_blank', 'noopener,noreferrer');
  };

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      color: '#fff',
      py: 4 
    }}>
      <RDHomeAppBar /> {/* Add RDHomeAppBar here */}
      <Container maxWidth="lg" sx={{ flex: 1 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 4, 
            textAlign: 'center',
            pt: { xs: 8, sm: 10, md: 12 },
            fontWeight: 'bold'
          }}
        >
          Our Products 
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between', 
          mb: 4,
          gap: 2
        }}>
          <TextField
            placeholder="Search..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ 
              width: { xs: '100%', sm: '30%' },
              borderRadius: '4px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#444' },
                '&:hover fieldset': { borderColor: '#666' },
                '&.Mui-focused fieldset': { borderColor: '#888' },
              },
              '& .MuiInputBase-input': { color: '#fff' },
            }}
          />
          <FormControl variant="outlined" sx={{ width: { xs: '100%', sm: '30%' } }}>
            <InputLabel id="products-label" sx={{ color: '#888' }}>All Products</InputLabel>
            <Select
              labelId="products-label"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              label="All Products"
              sx={{ 
                color: '#fff',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#888' },
              }}
            >
              <MenuItem value="">All products</MenuItem>
              <MenuItem value="script">Scripts</MenuItem>
              <MenuItem value="mlo">MLOs</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ width: { xs: '100%', sm: '30%' } }}>
            <InputLabel id="category-label" sx={{ color: '#888' }}>All Categories</InputLabel>
            <Select
              labelId="category-label"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="All Categories"
              sx={{ 
                color: '#fff',
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
          {filteredItems.map(({ id, image, title, category, price, tag, description, features, isAvailable, buyNowLink }, index) => (
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
                  {tag}
                </Box>
                <CardContent sx={{ p: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {category}
                  </Typography>
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                    {title}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {id === '1' && (
                        <>
                          <Button 
                            variant="contained" 
                            size="small"
                            sx={{ 
                              backgroundColor: '#ff9800',
                              color: '#fff',
                              '&:hover': { backgroundColor: '#ff9800' },
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBuyNow(buyNowLink);
                            }}
                          >
                            Buy Now
                          </Button>
                          <Button 
                            variant="outlined" 
                            size="small"
                            sx={{ 
                              borderColor: '#ff9800',
                              color: '#ff9800',
                              '&:hover': { borderColor: '#ff9800', color: '#ff9800' },
                            }}
                            onClick={(e) => handleDetails(id, e)}
                          >
                            Details
                          </Button>
                        </>
                      )}
                      {id === '2' && (
                        <Button 
                          variant="contained" 
                          size="small"
                          sx={{ 
                            backgroundColor: '#ff9800',
                            color: '#fff',
                            '&:hover': { backgroundColor: '#ff9800' },
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAvailableSoon();
                          }}
                        >
                          Available Soon
                        </Button>
                      )}
                    </Box>
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
      <Footer /> {/* Add the Footer component here */}
    </Box>
  );
}