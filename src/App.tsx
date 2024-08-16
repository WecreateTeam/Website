import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Features from './components/Features';
import ProductsPreview from './components/ProductsPreview';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ProductsPage from './components/ProductsPage';
import ProductDetails from './components/ProductDetails';
import MavaWidget from './components/MavaWidget';

interface ToggleCustomThemeProps {
	showCustomTheme: Boolean;
	toggleCustomTheme: () => void;
}

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }: ToggleCustomThemeProps) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100dvw',
				position: 'fixed',
				bottom: 24
			}}>
			<ToggleButtonGroup
				color="primary"
				exclusive
				value={showCustomTheme}
				onChange={toggleCustomTheme}
				aria-label="Platform"
				sx={{
					backgroundColor: 'background.default',
					'& .Mui-selected': {
						pointerEvents: 'none'
					}
				}}
			/>
		</Box>
	);
}

export default function LandingPage() {
	const [mode, setMode] = React.useState<PaletteMode>('dark');
	const [showCustomTheme, setShowCustomTheme] = React.useState(true);
	const LPtheme = createTheme(getLPTheme(mode));
	const defaultTheme = createTheme({ palette: { mode } });

	const toggleColorMode = () => {
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	const toggleCustomTheme = () => {
		setShowCustomTheme((prev) => !prev);
	};

	return (
		<ThemeProvider theme={LPtheme}>
			<CssBaseline />
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<React.Fragment>
								<Hero />
								<Box sx={{ bgcolor: 'background.default' }}>
									<ProductsPreview />
									<Divider />
									<LogoCollection />
									<Divider />
									<Testimonials />
									<Divider />
									<Highlights />
									<Divider />
									<Divider />
									<FAQ />
									<Divider />
									<Footer />
								</Box>
								<ToggleCustomTheme showCustomTheme={showCustomTheme} toggleCustomTheme={toggleCustomTheme} />
								<MavaWidget />
							</React.Fragment>
						}
					/>
					<Route path="/privacy" element={<PrivacyPolicy />} />
					<Route path="/terms" element={<TermsOfService />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/product/:id" element={<ProductDetails />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}
