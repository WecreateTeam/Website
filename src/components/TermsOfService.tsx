import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppAppBar from './AppAppBar';
import Footer from './Footer';

export default function TermsOfService() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
        Terms and Conditions
        </Typography>
        {/* Add your terms and conditions policy content here */}
      </Box>
      <Footer />
    </ThemeProvider>
  );
}