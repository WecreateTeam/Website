import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import HomeAppBar from './HomeAppBar'; // Import HomeAppBar

interface HeroProps {
	mode: 'light' | 'dark';
	toggleColorMode: () => void;
}

export default function Hero({ mode, toggleColorMode }: HeroProps) {
	return (
		<Box
			id="hero"
			sx={(theme) => ({
				width: '100%',
				backgroundImage:
					theme.palette.mode === 'light'
						? 'linear-gradient(180deg, #CEE5FD, #FFF)'
						: `linear-gradient(#f5af1b, ${alpha('#090E10', 0.0)})`,
				backgroundSize: '100% 20%',
				backgroundRepeat: 'no-repeat'
			})}>
			<HomeAppBar mode={mode} toggleColorMode={toggleColorMode} />
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					pt: { xs: 14, sm: 20 },
					pb: { xs: 8, sm: 12 }
				}}>
				<Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '100%' } }}>
					<Typography
						variant="h1"
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							alignSelf: 'center',
							textAlign: 'center',
							fontSize: 'clamp(3.5rem, 10vw, 4rem)'
						}}>
						Where Ideas Become&nbsp;
						<Typography
							component="span"
							variant="h1"
							sx={{
								fontSize: 'clamp(3rem, 10vw, 4rem)',
								color: (theme) => (theme.palette.mode === 'light' ? 'primary.main' : 'primary.light')
							}}>
							Reality!
						</Typography>
					</Typography>
					<Typography
						textAlign="center"
						color="text.secondary"
						sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}>
						Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your needs. Elevate your
						experience with top-tier features and services.
					</Typography>
					<Stack
						direction={{ xs: 'column', sm: 'row' }}
						alignSelf="center"
						spacing={1}
						useFlexGap
						sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}>
						<Button variant="text" color="primary" href="https://discord.gg/wecreate">
							Discord
						</Button>
						<Button variant="contained" color="primary" href="/products">
							Our Products
						</Button>
					</Stack>
				</Stack>
				<Box
					id="image"
					sx={(theme) => ({
						mt: { xs: 8, sm: 10 },
						alignSelf: 'center',
						height: { xs: 200, sm: 500 },
						width: '100%',
						backgroundImage:
							theme.palette.mode === 'light'
								? 'url("/static/images/templates/templates-images/hero-light.png")'
								: 'url("/static/images/templates/templates-images/hero-dark.png")',
						backgroundSize: 'cover',
						borderRadius: '10px',
						outline: '1px solid',
						outlineColor: theme.palette.mode === 'light' ? alpha('#BFCCD9', 0.5) : alpha('#9CCCFC', 0.1),
						boxShadow:
							theme.palette.mode === 'light'
								? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
								: `0 0 24px 12px ${alpha('#f5af1b', 0.2)}`
					})}
				/>
			</Container>
		</Box>
	);
}
