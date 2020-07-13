import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { RestaurantProps } from '../../common/Interfaces';
import comingSoonImage from '../../img/comingSoon.png';

interface RestaurantListProps {
	data: RestaurantProps;
}

const useStyles = makeStyles((theme: Theme) => ({
	cardContainer: {
		display: 'flex',
		width: '65%',
		margin: 'auto',
		marginBottom: '1rem',
		[theme.breakpoints.down('sm')]: {
			width: '75%'
		},
		[theme.breakpoints.down('xs')]: {
			width: '85%',
			flexDirection: 'column'
		}
	},
	cardDetails: {
		display: 'flex',
		flexDirection: 'column'
	},
	cardContent: {
		flex: '1 0 auto'
	},
	imgCover: {
		width: 200,
		height: 190,
		[theme.breakpoints.down('sm')]: {
			minWidth: '40%',
			height: 150
		},
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			height: 170
		}
	}
}));

const RestaurantList = ({ data }: RestaurantListProps) => {
	const classes = useStyles();
	console.log(data, 'data');

	return (
		<Card className={classes.cardContainer}>
			<CardMedia
				className={classes.imgCover}
				image={data.restaurant.featured_image !== '' ? data.restaurant.featured_image : comingSoonImage}
				title={data.restaurant.name}
			/>
			<div className={classes.cardDetails}>
				<CardContent className={classes.cardContent}>
					<Typography component='h5' variant='h5'>
						{data.restaurant.name}
					</Typography>
					<Typography variant='subtitle1' color='textSecondary'>
						{data.restaurant.location.address}
					</Typography>
				</CardContent>
			</div>
		</Card>
	);
};

export default RestaurantList;
