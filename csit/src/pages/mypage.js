import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import users from '../components/users.json';
import HaeOmatTiedot from '../components/omattiedot.js';
import HaeTyoTiedot from '../components/tyotiedot.js';

function MyPage() {
  const classes = useStyles();

  const data = users;


  return (
    <div className={classes.container}>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography className={classes.header}>Omat tiedot</Typography>
          {HaeOmatTiedot()}
        </Grid>

        <Grid item xs={6}>
          <Typography className={classes.header}>Työsuhde tiedot</Typography>
          {HaeTyoTiedot()}
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles({
  header: {
    fontSize: 35,
    marginBottom: 20,
  },
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
  paper: {
    textAlign: 'center',
  },
});

export default MyPage;
