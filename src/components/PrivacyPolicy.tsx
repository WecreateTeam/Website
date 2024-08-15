import * as React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import AppAppBar from './AppAppBar';
import Hero from './Hero';
import Footer from './Footer';

export default function PrivacyPolicy() {
  const defaultTheme = createTheme();
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const LPtheme = React.useMemo(() => getLPTheme(mode), [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
      <CssBaseline />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Footer />
      </Box>
  );
}