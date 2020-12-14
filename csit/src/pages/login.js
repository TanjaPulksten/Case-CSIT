import React, {useState, useEffect} from 'react';
import {Link, useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import userCommands from '../components/userdatacommands.js';
import biglogo from '../images/CSITheart-big.png';

function LogIn() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [tunnus, setTunnus] = useState("");
  const [note, setNote] = useState("");
  const [allowIn, setAllowIn] = useState(false);
  const [userID, setUserID] = useState(0);

  let history = useHistory()

  // Dialog:
  const handleClickOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

// Login tunnuksen tarkistus
  const checkTunnus = () => {
    console.log("Aloita tunnuksen tarkitus: " + tunnus)
    userCommands // get users from db.json server
      .getAll()
      .then(response => {
        console.log(response.data);

          let user = response.data.find(user => user.username === tunnus)

          if(user != null) {
            console.log("User:" + user.username);
            setUserID(user.id)
            setNote("")
            setAllowIn(true)
          }else{
            console.log("No users found");
            setNote("Väärä käyttäjätunnus.")
          }

    })
    .catch(error => {
      console.log(error)
    })
  };

// track if "allowIn" changes. If "allowIn" is true log in -> my page per userID
  useEffect(() => {
    console.log("useEffect: username")
    if (allowIn === true) {
      console.log("allowIn = true")
      console.log("push to: /mypage/"+ userID )
      history.push("/mypage/"+ userID)
    }else{
      console.log("allowIn = false")
    }
  },[allowIn, history, userID]);

  return (
    <div className={classes.container}>

      <img src={biglogo} alt='logo' style={{height: 150, marginBottom:10, marginTop:10}} />
      <Typography variant="h2">Kirjaudu sisään</Typography>

      <TextField
        required
        id="tunnus"
        label="Sähköpostiosoite"
        placeholder="essi.esimerkki@csit.fi"
        variant="outlined"
        size="small"
        onChange={e => setTunnus(e.target.value)}
        />
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
        variant="contained"
        color="primary"
        style={{marginBottom:15}}
        onClick={checkTunnus}>
        Kirjaudu
      </Button>

      <Typography style={{color:"#ED1C24", paddingBottom: 5}}> {note} </Typography>

      <Typography to="/forgot" component={Link} variant="body2">Unohtuiko salasana?</Typography>
      <Typography onClick={handleClickOpen} variant="body2">Eikö sinulla ole vielä tunnuksia?</Typography>

      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-title">{"Eikö sinulla ole vielä tunnuksia?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"> {"Saat tunnukset työsähköpostiisi viikon kuluessa työsuhteen alkamisesta. \n Jos et ole saanut sähköpostia, olethan yhteydessä lähitukeen."} </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Sulje
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LogIn;
