import React from 'react';
import Carousel from 'react-multi-carousel';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, CardActions, Button, Typography, CardActionArea } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';
import StarsIcon from '@material-ui/icons/Stars';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import 'react-multi-carousel/lib/styles.css';
import comingSoonImage from '../../img/comingSoon.png';
import ProgressBar from '../ProgressBar/ProgressBar';

interface MultiCarouselProps {
	label: string;
	data: any[];
}

const useStyles = makeStyles((theme: Theme) => ({
	heading: {
		fontFamily: 'Changa, sans-serif',
		[theme.breakpoints.down('md')]: {
			fontSize: '2rem'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.5rem'
		}
	},
	carouselContainer: {
		width: '85%',
		margin: 'auto',
		marginBottom: '1rem'
	},
	carouselItem: {
		display: 'flex',
		justifyContent: 'center',
		padding: '1rem'
	},
	infoContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	iconContainer: {
		marginRight: '0.5rem'
	},
	cardContainer: {
		maxWidth: 400
	},
	restaurantName: {
		[theme.breakpoints.down('md')]: {
			fontSize: '1.5rem'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.2rem'
		}
	}
}));

const responsive = {
	largeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4
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

	const renderCard = data.map((item) => {
		return (
			<div key={item.restaurant.name} className={classes.carouselItem}>
				<Card className={classes.cardContainer}>
					<CardActionArea>
						<CardMedia
							component='img'
							height='180'
							alt={item.restaurant.name}
							image={item.restaurant.featured_image !== '' ? item.restaurant.featured_image : comingSoonImage}
							title={item.restaurant.name}
						/>
						<CardContent>
							<Typography gutterBottom noWrap variant='h5' component='h2' className={classes.restaurantName}>
								{item.restaurant.name}
							</Typography>
							<Typography
								gutterBottom
								noWrap
								variant='body2'
								color='textSecondary'
								component='p'
								className={classes.infoContainer}>
								<PinDropIcon className={classes.iconContainer} />
								{item.restaurant.location.locality_verbose}
							</Typography>
							<Typography
								gutterBottom
								variant='body2'
								color='textSecondary'
								component='p'
								className={classes.infoContainer}>
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
			<Typography variant='h4' gutterBottom className={classes.heading}>
				{label}
			</Typography>
			{data.length === 0 ? <ProgressBar /> : <Carousel responsive={responsive}>{renderCard}</Carousel>}
		</div>
	);
};

export default MutliCarousel;
