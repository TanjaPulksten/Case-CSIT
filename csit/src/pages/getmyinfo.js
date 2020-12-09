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

import users from '../components/users.json'

function GetInfo() {
  const classes = useStyles();
  const data = users;
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
      <Typography variant="h2">Käyttäjätietojen tilaus</Typography>
      <Typography variant="h3">Mitä tietoja keräämme sinusta ja miksi</Typography>

      <div style={{maxWidth: 400}}>
        <Typography>Keräämme henkilötietoja oman liiketoimintamme tarpeisiin, erityisesti voidaksemme tarjota palveluitamme, myydäksemme ja markkinoidaksemme palveluitamme sekä rekrytoidaksemme uutta henkilöstöä. Sivustollamme on lomakkeita, joiden kautta meihin voi ottaa yhteyttä ja välittää meille henkilötietoja; esimerkiksi nimen ja yhteystiedot. Säilytämme ja käsittelemme lomakkeiden kautta toimitettuja tietoja, jotta voimme vastata meiltä pyydettyihin asioihin ja tuottaa palveluita asiakkaillemme. Ylläpidämme markkinointi- ja myyntirekisteriä, jonne verkkosivustomme kautta lähetetyt tiedot talletetaan. Voit koska tahansa pyytää meitä lopettamaan tietojesi käsittelyn ja poistamaan tiedot.</Typography> <br/>
        <Typography>Tietoja säilytetään hyvien tietoturvakäytäntöjen mukaisesti. Tietoja käsittelevät vain sellaiset henkilöt, jotka tehtäviensä puolesta tarvitsevat tietoja.</Typography>
      </div>

      <Typography variant="h3" style={{marginTop: 20}}>Tilaa tiedot sähköpostiisi</Typography>

      <TextField
        required
        id="tunnus"
        label="Anna sähköpostiosoite"
        placeholder="essi.esimerkki@csit.com"
        variant="outlined"
        size="small"
        style={{marginBottom:15}} />

      <Button
        onClick={handleClickOpen}
        variant="contained"
        color="primary"
        style={{marginBottom: 10, width:110}}>
        Vaihda
      </Button>
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
        onClose={handleClose}
        aria-labelledby="alert-title">
        <DialogTitle id="alert-title">{"Tiedot tilattu."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"> {"Saat sähköpostiisi kopiot tiedoistasi 24 tunnin sisällä."} </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button to="/mypage" component={Link} variant="contained" color="secondary">
            Omalle sivulle
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

export default GetInfo;
