import React, {useState} from 'react';
import {Link} from "react-router-dom";
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

function ForgotPassword() {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleClickOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className={classes.container}>

      <img src={biglogo} alt='logo' style={{height: 150, marginBottom:10, marginTop:10}} />

      <Typography variant="h2">Unohtuiko salasana?</Typography>

      <TextField
        required
        id="tunnus"
        label="Syötä sähköpostiosoite"
        placeholder="essi.esimerkki@csit.fi"
        variant="outlined"
        size="small"
        color="primary" />
      <br/>
      <Button
        variant="contained" color="primary"
        style={{marginBottom:15, width:110}}
        onClick={handleClickOpen}>
        Lähetä
      </Button>
      <Button
        variant="contained" color="secondary"
        style={{marginBottom:15, width:110}}
        to="/login" component={Link}>
        Takaisin
      </Button>

      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-title">
        <DialogTitle id="alert-title">{"Viesti on lähetetty."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"> {"Tarkista sähköpostisi. \n Jos viesti ei ole saapunut 10 min kuluessa, tarkista myös roskapostikansiosi."} </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button to="/login" component={Link} variant="contained" color="secondary">
            Kirjautumiseen
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

export default ForgotPassword;
