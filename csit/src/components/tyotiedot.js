import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


function HaeTyoTiedot(data) {
  const classes = useStyles();

  return (
    <div>
      <Typography style={{textAlign:"center"}} variant="h2">Työsuhdetiedot</Typography>
      <Paper elevation={4} className={classes.paper} key={data.id}>
        <TextField
          disabled
          id="username"
          label="Käyttäjätunnus"
          defaultValue={data.username}
          variant="outlined"
          size="small"
          style={{marginTop: 20, marginBottom: 5}} />
        <br/>
        <TextField
          disabled
          id="usernumber"
          label="Henkilökuntanumero"
          defaultValue={data.id}
          variant="outlined"
          size="small"
          style={{margin:5}} />
        <br/>
        <TextField
          disabled
          id="socialsecurity"
          label="Sosiaaliturvatunnus"
          defaultValue={data.socialSecurityCode}
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="workstarted"
          label="Työsuhteen alkamisaika"
          defaultValue={data.workPeriodStartDate}
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="work"
          label="Työsuhde"
          defaultValue={data.workPeriodStatus}
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="workid"
          label="Työsuhde ID"
          defaultValue={data.workPeriodId}
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="jobposition"
          label="Työnimike"
          defaultValue={data.workPeriodDescription}
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="jobdescription"
          label="Työnkuva"
          defaultValue={data.officialJobDescription}
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="workdepartment"
          label="Yksikkkö"
          defaultValue={data.workDepartment}
          variant="outlined"
          size="small"
          style={{margin: 5}}/>
        <br/>
        <TextField
          disabled
          id="supervisorid"
          label="Esimies ID"
          defaultValue={data.idOfSupervisor}
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
});

export default HaeTyoTiedot;
