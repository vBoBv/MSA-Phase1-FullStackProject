import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';
import StarsIcon from '@material-ui/icons/Stars';
import PhoneIcon from '@material-ui/icons/Phone';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
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
	},
	infoContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	iconContainer: {
		marginRight: '0.5rem'
	}
}));

const RestaurantList = ({ data }: RestaurantListProps) => {
	const classes = useStyles();
	console.log(data);
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
					<Typography className={classes.infoContainer} variant='subtitle1' color='textSecondary' gutterBottom>
						<StarsIcon className={classes.iconContainer} />
						{data.restaurant.user_rating.aggregate_rating}
					</Typography>
					<Typography className={classes.infoContainer} variant='subtitle1' color='textSecondary' gutterBottom>
						<AttachMoneyIcon className={classes.iconContainer} />
						{data.restaurant.average_cost_for_two} (Avg for 2 people)
					</Typography>
					<Typography className={classes.infoContainer} variant='subtitle1' color='textSecondary' gutterBottom>
						<PinDropIcon className={classes.iconContainer} />
						{data.restaurant.location.locality_verbose}
					</Typography>
					<Typography className={classes.infoContainer} variant='subtitle1' color='textSecondary' gutterBottom>
						<PhoneIcon className={classes.iconContainer} />
						{data.restaurant.phone_numbers}
					</Typography>
				</CardContent>
			</div>
		</Card>
	);
};

export default RestaurantList;
