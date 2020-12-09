import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

import users from '../components/users.json'

function UpdateInfo() {
  const classes = useStyles();
  const data = users;

  const [show, setShow] = useState(false);

  const [check, setCheck] = useState({
    username: false,
    usernumber: false,
    socialsecurity: false,
    workstarted: false,
    workstatus: false,
    workid: false,
    jobposition: false,
    jobdescription: false,
    workdepartment: false,
    supervisorid: false,
  });

  const handleCheckChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };

  const {username, usernumber, socialsecurity, workstarted, workstatus, workid, jobposition, jobdescription, workdepartment, supervisorid} = check;


  const handleDialogOpen = () => {
    console.log("open")
    setShow(true);
  };
  const handleDialogClose = () => {
    console.log("close")
    setShow(false);
  };

  return (
    <div className={classes.container}>
      <Typography style={{textAlign:"center"}} variant="h2">Pyydä työsuhdetietojen päivitystä</Typography>
      <Paper elevation={4} className={classes.paper}>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{margin: 5}}>Valitse päivitettävät kentät</FormLabel>

          <FormGroup>

            <div className={classes.check}>
            <FormControlLabel
            control={<Checkbox checked={username} onChange={handleCheckChange} name="username"/>}
            style={{marginRight:0}}/>
            <TextField
              disabled
              id="username"
              label="Käyttäjätunnus"
              variant="outlined"
              size="small"/>
            </div>

            <div className={classes.check}>
              <FormControlLabel
              control={<Checkbox checked={usernumber} onChange={handleCheckChange} name="usernumber"/>}
              style={{marginRight:0}}/>
              <TextField
                id="usernumber"
                label="Käyttäjänumero"
                variant="outlined"
                size="small"/>
            </div>

            <div className={classes.check}>
              <FormControlLabel
              control={<Checkbox checked={socialsecurity} onChange={handleCheckChange} name="socialsecurity" />}
              style={{marginRight:0}}/>
              <TextField
                id="socialsecurity"
                label="Sosiaaliturvatunnus"
                variant="outlined"
                size="small"/>
            </div>

            <div className={classes.check}>
              <FormControlLabel
              control={<Checkbox checked={workstarted} onChange={handleCheckChange} name="workstarted" />}
              style={{marginRight:0}}/>
              <TextField
                id="workstarted"
                label="Työsuhteen alkamisaika"
                variant="outlined"
                size="small"/>
            </div>

            <div className={classes.check}>
              <FormControlLabel
              control={<Checkbox checked={workstatus} onChange={handleCheckChange} name="workstatus" />}
              style={{marginRight:0}}/>
              <TextField
                id="workstatus"
                label="Työsuhde"
                variant="outlined"
                size="small"/>
            </div>

            <div className={classes.check}>
              <FormControlLabel
              control={<Checkbox checked={workid} onChange={handleCheckChange} name="workid" />}
              style={{marginRight:0}}/>
              <TextField
                id="workid"
                label="Työsuhde ID"
                variant="outlined"
                size="small"/>
            </div>

            <div className={classes.check}>
              <FormControlLabel
              control={<Checkbox checked={jobposition} onChange={handleCheckChange} name="jobposition" />}
              style={{marginRight:0}}/>
              <TextField
                id="jobposition"
                label="Työnimike"
                variant="outlined"
                size="small"/>
            </div>

            <div className={classes.check}>
              <FormControlLabel
              control={<Checkbox checked={jobdescription} onChange={handleCheckChange} name="jobdescription" />}
              style={{marginRight:0}}/>
              <TextField
                id="jobdescription"
                label="Työnkuva"
                variant="outlined"
                size="small"/>
            </div>

            <div className={classes.check}>
              <FormControlLabel
              control={<Checkbox checked={supervisorid} onChange={handleCheckChange} name="supervisorid" />}
              style={{marginRight:0}}/>
              <TextField
                id="supervisorid"
                label="Esimies ID"
                variant="outlined"
                size="small"/>
            </div>

            <div className={classes.check}>
              <FormControlLabel
              control={<Checkbox checked={workdepartment} onChange={handleCheckChange} name="workdepartment" />}
              style={{marginRight:0}}/>
              <TextField
                id="workdepartment"
                label="Yksikkkö"
                variant="outlined"
                size="small"/>
            </div>

          </FormGroup>
        </FormControl>

        <TextField
          required
          multiline
          rowsMax={4}
          id="message"
          label="Perustele tietojen päivitys"
          variant="outlined"
          size="small"
          style={{marginTop: 5, marginBottom: 20, width: 253}}/>

        <Button
          onClick={handleDialogOpen}
          variant="contained"
          color="primary"
          style={{marginBottom: 10, width:110}}>
          Lähetä
        </Button> <br/>
        <Button
          to="/mypage"
          component={Link}
          variant="contained"
          color="secondary"
          style={{marginBottom: 20, width:110}}>
          Peruuta
        </Button>

        <Dialog
          open={show}
          onClose={handleDialogClose}
          aria-labelledby="alert-title">
          <DialogTitle id="alert-title">{"Pyyntö lähetetty."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"> {"Saat tietoa pyynnön tilasta sähköpostitse."} </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button to="/mypage" component={Link} variant="contained" color="secondary">
              Omalle sivulle
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </div>
  );
  }

const useStyles = makeStyles({
  paper: {
    textAlign: 'center',
    width: 320,
    backgroundColor: "#FBFAFA",
    paddingTop: 20,
    marginBottom: 20
  },
  container: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
  },
  check: {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    margin: 5
  },
});

export default UpdateInfo;
