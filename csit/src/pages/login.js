import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import biglogo from '../images/CSITheart-big.png';

function LogIn() {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleClickOpen = () => {
    console.log("open")
    setShow(true);
  };
  const handleClose = () => {
    console.log("close")
    setShow(false);
  };

  return (
    <div className={classes.container}>

      <img src={biglogo} alt='logo' style={{height: 150, marginBottom:10, marginTop:10}} />

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

      <Button variant="contained" color="primary" style={{marginBottom:15}} to="/mypage" component={Link}>
        Kirjaudu
      </Button>

      <Typography to="/forgot" component={Link} variant="body2">Unohtuiko salasana?</Typography>
      <Typography onClick={handleClickOpen} component={Link} variant="body2">Eikö sinulla ole vielä tunnuksia?</Typography>

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
