import * as React from 'react';
import { CssBaseline, Box, Typography, Container } from '@mui/material';
import AppAppBar from './AppAppBar';
import Footer from './Footer';

export default function PrivacyPolicy() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <AppAppBar />
      <Container maxWidth="md" sx={{ flexGrow: 1 }}>
        <Box sx={{ padding: 10, my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            This is the main content of your privacy policy. You can add more detailed information here.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}