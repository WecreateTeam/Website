import * as React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const items = [
	{
		id: '1',
		image: 'https://via.placeholder.com/150',
		title: 'Gang Spray System',
		category: 'Script',
		price: '35.00 GBP',
		buyNowLink: 'https://example.com/buy/gang-spray-system'
	}
];

export default function ProductsPreview() {
	const navigate = useNavigate();

	const handleBuyNow = (buyNowLink: string) => {
		window.open(buyNowLink, '_blank', 'noopener,noreferrer');
	};

	const handleDetails = (id: string) => {
		navigate(`/product/${id}`);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				pt: { xs: 3, sm: 4 },
				pb: { xs: 3, sm: 6 },
				color: '#fff'
			}}>
			<Container
				id="products"
				sx={{
					pt: { xs: 1, sm: 0 },
					pb: { xs: 4, sm: 0 },
					position: 'relative',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: { xs: 1, sm: 2 }
				}}>
				<Typography
					component="h2"
					variant="h4"
					color="text.primary"
					sx={{
						width: { sm: '100%', md: '60%' },
						textAlign: { sm: 'left', md: 'center' },
						mb: 1
					}}>
					Our Products
				</Typography>
				<Grid container spacing={1}>
					{items.map(({ id, image, title, category, price, buyNowLink }, index) => (
						<Grid item xs={12} sm={6} md={3} key={index}>
							<Card
								sx={{
									color: '#fff',
									borderRadius: '8px',
									overflow: 'hidden',
									position: 'relative',
									mt: { xs: 1, sm: 0 }
								}}>
								<CardMedia component="img" height="150" image={image} alt={title} />
								<Box
									sx={{
										position: 'absolute',
										top: 4,
										right: 4,
										backgroundColor: '#ff9800',
										color: '#000',
										borderRadius: '2px',
										px: 0.5,
										py: 0.25,
										fontSize: '0.65rem',
										fontWeight: 'bold',
										zIndex: 1
									}}>
									NEW RELEASE
								</Box>
								<CardContent sx={{ p: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
									<Typography variant="body2" color="text.secondary" sx={{ mb: 0.25 }}>
										{category}
									</Typography>
									<Typography variant="h6" component="h3" sx={{ mb: 0.25, lineHeight: 1.1, fontSize: '0.9rem' }}>
										{title}
									</Typography>
									<Typography variant="body2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
										{price}
									</Typography>
									<Box sx={{ mt: 'auto' }}>
										<Box sx={{ display: 'flex', gap: 0.5 }}>
											<Button
												variant="contained"
												size="small"
												sx={{
													flex: 1,
													backgroundColor: '#ff9800',
													color: '#fff',
													'&:hover': { backgroundColor: '#ffcc00' },
													fontSize: '0.7rem',
													padding: '2px 4px'
												}}
												onClick={() => handleBuyNow(buyNowLink)}>
												Buy Now
											</Button>
											{id === '1' && (
												<Button
													variant="outlined"
													size="small"
													sx={{
														flex: 1,
														borderColor: '#ff9800',
														color: '#ff9800',
														'&:hover': { borderColor: '#ffcc00', color: '#ffcc00' },
														fontSize: '0.7rem',
														padding: '2px 4px'
													}}
													onClick={() => handleDetails(id)}>
													Details
												</Button>
											)}
										</Box>
									</Box>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
				<Box sx={{ mt: 2, textAlign: 'center' }}>
					<Button
						component={RouterLink}
						to="/products"
						sx={{
							backgroundColor: '#ff9800',
							color: '#fff',
							fontWeight: 'bold',
							'&:hover': {
								backgroundColor: '#ffcc00'
							},
							transition: 'background-color 0.3s',
							padding: '8px 16px',
							borderRadius: '4px',
							fontSize: '0.9rem',
							textTransform: 'none',
							boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
							'&:active': {
								boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
							}
						}}>
						More Products
					</Button>
				</Box>
			</Container>
		</Box>
	);
}
