import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

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
			width: 180,
			height: 150
		},
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			height: 170
		}
	}
}));

const RestaurantList = () => {
	const classes = useStyles();

	return (
		<Card className={classes.cardContainer}>
			<CardMedia
				className={classes.imgCover}
				image='https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'
				title='Live from space album cover'
			/>
			<div className={classes.cardDetails}>
				<CardContent className={classes.cardContent}>
					<Typography component='h5' variant='h5'>
						Live From Space
					</Typography>
					<Typography variant='subtitle1' color='textSecondary'>
						Mac Miller
					</Typography>
				</CardContent>
			</div>
		</Card>
	);
};

export default RestaurantList;
