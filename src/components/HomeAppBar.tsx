import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import DiscordIcon from './DiscordIcon';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const logoStyle = {
	width: '40px',
	height: '40px',
	cursor: 'pointer'
};

function HomeAppBar() {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const scrollToSection = (sectionId: string) => {
		const sectionElement = document.getElementById(sectionId);
		const offset = 128;
		if (sectionElement) {
			const targetScroll = sectionElement.offsetTop - offset;
			window.scrollTo({
				top: targetScroll,
				behavior: 'smooth'
			});
			setOpen(false);
		}
	};

	const handleDiscordClick = () => {
		window.open('https://discord.gg/wecreate', '_blank');
	};

	const handleGitHubClick = () => {
		window.open('https://github.com/WecreateTeam', '_blank');
	};

	const handleYouTubeClick = () => {
		window.open('https://www.youtube.com/@Wecreate5M', '_blank');
	};

	const menuItems = [
		{ label: 'Products', id: 'products' },
		{ label: 'Documentation', id: 'docs', url: 'https://docs.example.com' },
		{ label: 'Testimonials', id: 'testimonials' },
		{ label: 'FAQ', id: 'faq' }
	];

	const handleItemClick = (item: { id: string; url?: string }) => {
		if (item.url) {
			window.open(item.url, '_blank');
		} else {
			scrollToSection(item.id);
		}
		setOpen(false);
	};

	return (
		<AppBar
			position="fixed"
			sx={{
				boxShadow: 0,
				bgcolor: 'transparent',
				backgroundImage: 'none',
				mt: 2
			}}>
			<Container maxWidth="lg">
				<Toolbar
					variant="regular"
					sx={(theme) => ({
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexShrink: 0,
						borderRadius: '999px',
						bgcolor: 'rgba(0, 0, 0, 0.4)',
						backdropFilter: 'blur(24px)',
						maxHeight: 40,
						border: '1px solid',
						borderColor: 'divider',
						boxShadow:
							'0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)'
					})}>
					<Box
						sx={{
							flexGrow: 1,
							display: 'flex',
							alignItems: 'center',
							ml: '-10',
							px: 0
						}}>
						<img src="assets/logo.png" style={logoStyle} alt="Wecreate logo" />
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							{menuItems.map((item) => (
								<MenuItem key={item.id} onClick={() => handleItemClick(item)} sx={{ py: '6px', px: '12px' }}>
									<Typography variant="body2" color="text.primary">
										{item.label}
									</Typography>
								</MenuItem>
							))}
						</Box>
					</Box>
					<Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
						<IconButton onClick={handleDiscordClick} sx={{ mr: 1, color: 'text.primary' }}>
							<DiscordIcon />
						</IconButton>
						<IconButton onClick={handleGitHubClick} sx={{ mr: 1, color: 'text.primary' }}>
							<GitHubIcon />
						</IconButton>
						<IconButton onClick={handleYouTubeClick} sx={{ mr: 1, color: 'text.primary' }}>
							<YouTubeIcon />
						</IconButton>
					</Box>
					<Box sx={{ display: { sm: 'block', md: 'none' } }}>
						<Button
							variant="text"
							color="primary"
							aria-label="menu"
							onClick={toggleDrawer(true)}
							sx={{ minWidth: '30px', p: '4px' }}>
							<MenuIcon />
						</Button>
						<Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
							<Box
								sx={{
									minWidth: '60dvw',
									p: 2,
									backgroundColor: 'background.paper',
									flexGrow: 1
								}}>
								{menuItems.map((item) => (
									<MenuItem key={item.id} onClick={() => handleItemClick(item)}>
										{item.label}
									</MenuItem>
								))}
							</Box>
						</Drawer>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default HomeAppBar;
