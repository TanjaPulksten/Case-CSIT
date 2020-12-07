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
          defaultValue={users[2].id}
          variant="outlined"
          size="small"
          style={{marginTop: 20, marginBottom: 5}} />
        <br/>
        <TextField
          disabled
          id="socialsecurity"
          label="Sosiaaliturvatunnus"
          defaultValue={users[2].socialSecurityCode}
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="workstarted"
          label="Työsuhteen alkamisaika"
          defaultValue={users[2].workPeriodStartDate}
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="work"
          label="Työsuhde"
          defaultValue={users[2].workPeriodDescription}
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="workid"
          label="Työsuhde ID"
          defaultValue={users[2].workPeriodId}
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="jobposition"
          label="Työnimike"
          defaultValue={users[2].workPeriodDescription}
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="jobdescription"
          label="Työnkuva"
          defaultValue={users[2].officialJobDescription}
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="supervisorid"
          label="Esimies ID"
          defaultValue={users[2].idOfSupervisor}
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
