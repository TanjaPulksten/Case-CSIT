import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import biglogo from '../images/CSITheart-big.png';

function ForgotPassword() {
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

      <img src={biglogo} alt='logo' style={{height: 150, marginBottom:10}} />

      <Typography className={classes.header}>Unohtuiko salasana</Typography>

      <TextField
        required
        id="tunnus"
        label="Syötä sähköpostiosoite"
        placeholder="essi.esimerkki@csit.com"
        variant="outlined"
        size="small"
        color="primary" />
      <br/>
      <Button
        style={{marginBottom:15}}
        onClick={handleClickOpen}>
        Lähetä
      </Button>
      <Button
        style={{marginBottom:15}}
        to="/login" component={Link}>
        Takaisin
      </Button>

      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-title">
        <DialogTitle id="alert-title">{"Viesti on lähetetty. Tarkista sähköpostisi."}</DialogTitle>
        <DialogActions>
          <Button to="/login" component={Link} color="secondary">
            Kirjautumiseen
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

export default ForgotPassword;
