import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


import users from '../components/users.json'

function HaeTyoTiedot() {
  const classes = useStyles();
  const data = users;

  return (
    <div>
      <Typography style={{textAlign:"center"}} className={classes.header}>Työsuhdetiedot</Typography>
      <Paper elevation={4} className={classes.paper}>
        <TextField
          disabled
          id="usernumber"
          label="Käyttäjänumero"
          variant="outlined"
          size="small"
          style={{marginTop: 20, marginBottom: 5}} />
        <br/>
        <TextField
          disabled
          id="socialsecurity"
          label="Sosiaaliturvatunnus"
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="workstarted"
          label="Työsuhteen alkamisaika"
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="workstatus"
          label="Työsuhde"
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="workid"
          label="Työsuhde ID"
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="jobposition"
          label="Työnimike"
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="jobdescription"
          label="Työnkuva"
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="supervisorid"
          label="Esimies ID"
          variant="outlined"
          size="small"
          style={{marginTop: 5, marginBottom: 20}}/>
        <br/>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles({
  paper: {
    textAlign: 'center',
    width: 300,
    backgroundColor: "#EEEEEE"
  },
  header: {
    fontSize: 35,
    marginBottom: 20,
  },
});

export default HaeTyoTiedot;
