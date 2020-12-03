import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


import users from '../components/users.json'

function HaeOmatTiedot() {
  const classes = useStyles();
  const data = users;

  return (
    <Paper elevation={4} className={classes.paper}>
      <TextField
        required
        id="username"
        label="Käyttäjätunnus"
        variant="outlined"
        size="small"
        style={{marginTop: 20, marginBottom: 5}} />
      <br/>
      <TextField
        required
        id="surname"
        label="Sukunimi"
        variant="outlined"
        size="small"
        style={{margin: 5}}/>
      <br/>
      <TextField
        required
        id="firstnames"
        label="Etunimet"
        variant="outlined"
        size="small"
        style={{margin: 5}}/>
      <br/>
      <TextField
        id="nickname"
        label="Kutsumanimi"
        variant="outlined"
        size="small"
        style={{margin: 5}}/>
      <br/>
      <TextField
        required
        id="address"
        label="Katuosoite"
        variant="outlined"
        size="small"
        style={{margin: 5}}/>
      <br/>
      <TextField
        required
        id="postalcode"
        label="Postinumero"
        variant="outlined"
        size="small"
        style={{margin: 5}}/>
      <br/>
      <TextField
        required
        id="city"
        label="Kaupunki"
        variant="outlined"
        size="small"
        style={{margin: 5}}/>
      <br/>
      <TextField
        required
        id="language"
        label="Kieli"
        variant="outlined"
        size="small"
        style={{marginTop: 5, marginBottom: 20}}/>
      <br/>
      <Button style={{marginBottom: 20}}>Päivitä</Button>
    </Paper>
  );
}

const useStyles = makeStyles({
  paper: {
    textAlign: 'center',
    width: 300,
    backgroundColor: "#FBFAFA"
  },
});

export default HaeOmatTiedot;
