import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Collapse, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { CuisineProps, RestaurantProps, LocationProps } from '../../common/Interfaces';
import american from '../../img/american.jpg';
import asian from '../../img/asian.jpg';
import european from '../../img/european.jpg';
import indian from '../../img/indian.jpg';
import japanese from '../../img/japanese.jpg';
import comingSoonImage from '../../img/comingSoon.png';
import MutliCarousel from '../MultiCarousel/MultiCarousel';

interface CuisinePageProps {
	cuisines: RestaurantProps[][];
	categories: CuisineProps[];
}

const useStyles = makeStyles((theme: Theme) => ({
	cardContainer: {
		maxWidth: 400,
		[theme.breakpoints.down('sm')]: {
			maxWidth: 420
		}
	},
	cuisineContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '85%',
		margin: 'auto',
		marginBottom: '1rem',
		gridGap: '1rem'
	}
}));

const Cuisine = ({ cuisines, categories }: CuisinePageProps) => {
	const classes = useStyles();
	const [checked, setChecked] = useState(false);
	const [selectedCuisineName, setSelectedCuisineName] = useState(
		'American' || 'Asian' || 'European' || 'Indian' || 'Japan'
	);
	const [selectedCuisine, setSelectedCuisine] = useState<RestaurantProps[]>([]);

	const handleCheck = (cuisineName: string) => {
		for (let i = 0; i < cuisines.length; i++) {
			if (cuisines[i][cuisines.length].restaurant.cuisines?.includes(cuisineName)) {
				setSelectedCuisine(cuisines[i]);
			}
		}

		if (cuisineName === selectedCuisineName) {
			setTimeout(() => {
				setChecked((prev) => !prev);
			}, 600);
		} else if (cuisineName !== selectedCuisineName && !checked) {
			setTimeout(() => {
				setChecked((prev) => !prev);
				setSelectedCuisineName(cuisineName);
			}, 600);
		} else {
			setSelectedCuisineName(cuisineName);
		}
	};

	const renderDefaultPicture = (num: number) => {
		switch (num) {
			case 0:
				return american;
			case 1:
				return asian;
			case 2:
				return european;
			case 3:
				return indian;
			case 4:
				return japanese;
			default:
				return comingSoonImage;
		}
	};

	const renderCuisineCategory = categories.map((category, index) => {
		return (
			<Grid item md key={category.cuisine.cuisine_id}>
				<Card className={classes.cardContainer} onClick={() => handleCheck(category.cuisine.cuisine_name)}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt='Contemplative Reptile'
							height='140'
							image={renderDefaultPicture(index)}
							title='Contemplative Reptile'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								{category.cuisine.cuisine_name}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		);
	});

	const renderSelectedCuisine = () => {
		return (
			<Collapse in={checked} timeout={500}>
				<MutliCarousel label='Here is our recommendations...' data={selectedCuisine} />
			</Collapse>
		);
	};

	return (
		<div>
			<Grid container className={classes.cuisineContainer}>
				{renderCuisineCategory}
			</Grid>
			{renderSelectedCuisine()}
		</div>
	);
};

export default Cuisine;
