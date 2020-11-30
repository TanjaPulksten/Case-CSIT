import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import biglogo from '../images/CSITheart-big.png';

function LogIn() {
  const classes = useStyles();

  return (
    <div className={classes.container}>

      <img src={biglogo} alt='logo' style={{height: 150, marginBottom:10}} />

      <Typography className={classes.header}>Kirjaudu sisään</Typography>

      <TextField
        required
        id="tunnus"
        label="Sähköpostiosoite"
        placeholder="essi.esimerkki@csit.com"
        variant="outlined"
        size="small" />
      <br/>
      <TextField
        required
        id="salasana"
        label="Salasana"
        type="password"
        variant="outlined"
        size="small" />
      <br/>

      <Button
        style={{marginBottom:15}}
        to="/mypage" component={Link}>
        Kirjaudu
      </Button>

      <Typography to="/forgot" component={Link}>Unohtuiko salasana?</Typography>
      <Typography>Eikö sinulla ole vielä tunnuksia?</Typography>

    </div>
  );
}

const useStyles = makeStyles({
  header: {
    fontSize: 35,
    marginBottom: 20,
  },
  container: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LogIn;
