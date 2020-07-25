import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme: Theme) => ({
	progressBarContainer: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2)
		},
		marginTop: '1rem'
	},
	loadingText: {
		textAlign: 'center',
		fontFamily: 'Righteous, cursive',
		fontSize: '2rem',
		[theme.breakpoints.down('md')]: {
			fontSize: '1.7rem'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.4rem'
		}
	}
}));

const LinearIndeterminate = () => {
	const classes = useStyles();

	return (
		<div className={classes.progressBarContainer}>
			<Typography variant='h5' className={classes.loadingText}>
				Fetching Data
			</Typography>
			<LinearProgress color='secondary' />
		</div>
	);
};

export default LinearIndeterminate;
