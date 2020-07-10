import React from 'react';
import Carousel from 'react-multi-carousel';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, CardActions, Button, Typography, CardActionArea } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';
import StarsIcon from '@material-ui/icons/Stars';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import 'react-multi-carousel/lib/styles.css';

interface MultiCarouselProps {
	label: string;
	data: any[];
}

const useStyles = makeStyles((theme: Theme) => ({
	carouselContainer: {
		width: '80%',
		margin: 'auto'
	},
	carouselItem: {
		display: 'flex',
		justifyContent: 'center'
	},
	addressContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	iconContainer: {
		marginRight: '0.5rem'
	}
}));

const responsive = {
	largeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

const MutliCarousel = ({ label, data }: MultiCarouselProps) => {
	const classes = useStyles();
	// console.log(data);

	const renderCard = data.map((item) => {
		return (
			<div key={item.restaurant.name} className={classes.carouselItem}>
				<Card>
					<CardActionArea>
						<CardMedia
							component='img'
							alt={item.restaurant.name}
							height='140'
							image={item.restaurant.featured_image}
							title={item.restaurant.name}
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								{item.restaurant.name}
							</Typography>
							<Typography
								gutterBottom
								variant='body2'
								color='textSecondary'
								component='p'
								className={classes.addressContainer}>
								<PinDropIcon className={classes.iconContainer} />
								{item.restaurant.location.locality_verbose}
							</Typography>
							<Typography
								gutterBottom
								variant='body2'
								color='textSecondary'
								component='p'
								className={classes.addressContainer}>
								<StarsIcon className={classes.iconContainer} />
								{item.restaurant.user_rating.aggregate_rating}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='secondary' startIcon={<DynamicFeedIcon />} href={item.restaurant.url}>
							More Info
						</Button>
					</CardActions>
				</Card>
			</div>
		);
	});

	return (
		<div className={classes.carouselContainer}>
			<Typography variant='h4' gutterBottom>
				{label}
			</Typography>
			<Carousel responsive={responsive}>{renderCard}</Carousel>
		</div>
	);
};

export default MutliCarousel;
