import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Collapse, Paper } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		maxWidth: 345
	},
	container: {
		display: 'flex'
	},
	paper: {
		margin: theme.spacing(1)
	},
	svg: {
		width: 100,
		height: 100
	},
	polygon: {
		fill: theme.palette.common.white,
		stroke: theme.palette.divider,
		strokeWidth: 1
	},
	cuisineContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '85%',
		margin: 'auto',
		marginBottom: '1rem'
	}
}));

const Cuisine = () => {
	const classes = useStyles();
	const [checked, setChecked] = React.useState(false);

	const handleCheck = () => {
		setChecked((prev) => !prev);
	};

	const renderCuisineCategory = () => {
		return (
			<div className={classes.cuisineContainer}>
				<Card className={classes.root} onClick={handleCheck}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt='Contemplative Reptile'
							height='140'
							image='/static/images/cards/contemplative-reptile.jpg'
							title='Contemplative Reptile'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								Lizard
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className={classes.root} onClick={handleCheck}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt='Contemplative Reptile'
							height='140'
							image='/static/images/cards/contemplative-reptile.jpg'
							title='Contemplative Reptile'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								Lizard
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className={classes.root} onClick={handleCheck}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt='Contemplative Reptile'
							height='140'
							image='/static/images/cards/contemplative-reptile.jpg'
							title='Contemplative Reptile'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								Lizard
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className={classes.root} onClick={handleCheck}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt='Contemplative Reptile'
							height='140'
							image='/static/images/cards/contemplative-reptile.jpg'
							title='Contemplative Reptile'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								Lizard
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className={classes.root} onClick={handleCheck}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt='Contemplative Reptile'
							height='140'
							image='/static/images/cards/contemplative-reptile.jpg'
							title='Contemplative Reptile'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								Lizard
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className={classes.root} onClick={handleCheck}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt='Contemplative Reptile'
							height='140'
							image='/static/images/cards/contemplative-reptile.jpg'
							title='Contemplative Reptile'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								Lizard
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className={classes.root} onClick={handleCheck}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt='Contemplative Reptile'
							height='140'
							image='/static/images/cards/contemplative-reptile.jpg'
							title='Contemplative Reptile'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								Lizard
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className={classes.root} onClick={handleCheck}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt='Contemplative Reptile'
							height='140'
							image='/static/images/cards/contemplative-reptile.jpg'
							title='Contemplative Reptile'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								Lizard
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
		);
	};

	return (
		<div>
			{renderCuisineCategory()}
			<div className={classes.container}>
				<Collapse in={checked}>
					<Paper elevation={4} className={classes.paper}>
						<svg className={classes.svg}>
							<polygon points='0,100 50,00, 100,100' className={classes.polygon} />
						</svg>
					</Paper>
				</Collapse>
			</div>
		</div>
	);
};

export default Cuisine;
