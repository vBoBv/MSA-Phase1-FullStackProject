import React from 'react';
import Carousel from 'react-multi-carousel';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	Avatar,
	IconButton,
	Typography
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Favorite, Share, ExpandMore, MoreVert } from '@material-ui/icons';
import 'react-multi-carousel/lib/styles.css';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 345
		},
		media: {
			height: 0,
			paddingTop: '56.25%' // 16:9
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest
			})
		},
		expandOpen: {
			transform: 'rotate(180deg)'
		},
		avatar: {
			backgroundColor: red[500]
		}
	})
);

const MutliCarousel = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
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

	return (
		<div style={{ width: '80%', margin: 'auto' }}>
			<Typography variant='h4' gutterBottom>
				Cusines
			</Typography>
			<Carousel responsive={responsive}>
				<div style={{ backgroundColor: 'red', display: 'flex', justifyContent: 'center' }}>
					<Card className={classes.root}>
						<CardHeader
							avatar={
								<Avatar aria-label='recipe' className={classes.avatar}>
									R
								</Avatar>
							}
							action={
								<IconButton aria-label='settings'>
									<MoreVert />
								</IconButton>
							}
							title='Shrimp and Chorizo Paella'
							subheader='September 14, 2016'
						/>
						<CardMedia className={classes.media} image='/static/images/cards/paella.jpg' title='Paella dish' />
						<CardContent>
							<Typography variant='body2' color='textSecondary' component='p'>
								This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
								cup of frozen peas along with the mussels, if you like.
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label='add to favorites'>
								<Favorite />
							</IconButton>
							<IconButton aria-label='share'>
								<Share />
							</IconButton>
							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label='show more'>
								<ExpandMore />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout='auto' unmountOnExit>
							<CardContent>
								<Typography paragraph>Method:</Typography>
								<Typography paragraph>
									Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
								</Typography>
								<Typography paragraph>
									Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken,
									shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer
									shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay
									leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and
									fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
								</Typography>
								<Typography paragraph>
									Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without
									stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
									reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until
									mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t
									open.)
								</Typography>
								<Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
							</CardContent>
						</Collapse>
					</Card>
				</div>
				;
			</Carousel>
		</div>
	);
};

export default MutliCarousel;
