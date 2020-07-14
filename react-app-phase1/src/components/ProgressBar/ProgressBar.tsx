import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme: Theme) => ({
	progressBarContainer: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2)
		}
	},
	loadingText: {
		textAlign: 'center'
	}
}));

const LinearIndeterminate = () => {
	const classes = useStyles();

	return (
		<div className={classes.progressBarContainer}>
			<Typography variant='h5' className={classes.loadingText}>
				Loading
			</Typography>
			<LinearProgress color='secondary' />
		</div>
	);
};

export default LinearIndeterminate;
