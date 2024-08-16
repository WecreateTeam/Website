import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomeAppBar from './components/HomeAppBar';
import Hero from './components/Hero';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function LandingPage() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <HomeAppBar disableThemeSwitch={true} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Products />
        <Divider />
        <Divider />
        <FAQs />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}