import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
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
      <Grid container spacing={8}>

        <Grid container item xs={12} sm={6} alignContent="flex-end" direction="column">
          {HaeOmatTiedot()}
        </Grid>

        <Grid container item xs={12} sm={6} alignContent="flex-start" direction="column">
          {HaeTyoTiedot()}

          <Paper elevation={4} className={classes.paper}>
            <Typography to="/changepassword" component={Link} variant="body2">Vaihda salasana</Typography> <br/>
            <Typography to="/update" component={Link} variant="body2">Työsuhdetietojen päivityspyyntö</Typography> <br/>
            <Typography to="/getmydata" component={Link} variant="body2">Omien käyttäjätietojen tilaus</Typography> <br/>
            <Typography to="/delete" component={Link} variant="body2">Tietojen poistopyyntö</Typography>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    display: "flex",
    marginLeft: 50,
    marginRight: 50,
  },
  paper: {
    padding: "15px 10px 15px 40px",
    width: 300,
    backgroundColor: "#FBFAFA",
    marginTop: 20,
  },
});

export default MyPage;
