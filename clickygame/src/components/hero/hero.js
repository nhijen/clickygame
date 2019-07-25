import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { lightBlue, blue } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { typography } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    color: blue,
  },
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
        <Grid item xs={4}>
          <Typography variant="h6" color="inherit">
            Clicky Game
            </Typography>

            </Grid>

     <Grid item xs={4}>
          <Typography variant="h6" color="inherit">
            You guess Correctly
          </Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography variant="h6" color="inherit">
            Score
          </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <div><typography><h1>Clicky Game!</h1>
      <h3>Click on an image to earn points, but don't click on any more than once!</h3></typography></div>
    </div>
  );
}

