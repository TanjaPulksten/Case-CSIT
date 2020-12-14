import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


function DeleteInfo() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const {id} = useParams();

  const handleClickOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };


  return (
    <div className={classes.container}>
      <Typography variant="h2">Pyydä tietojen poistoa</Typography>
      <Typography variant="h3">Mitä tietojen poistaminen tarkoittaa?</Typography>

      <div style={{maxWidth: 400}}>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</Typography> <br/>
        <Typography>Voit koska tahansa pyytää meitä lopettamaan tietojesi käsittelyn ja poistamaan tiedot.</Typography>
      </div>

      <TextField
        required
        id="salasana"
        label="Anna salasana"
        type="password"
        variant="outlined"
        size="small"
        style={{marginBottom:15, marginTop: 25}} />

      <Button
        onClick={handleClickOpen}
        variant="contained"
        color="primary"
        style={{marginBottom: 10, width:110}}>
        Lähetä
      </Button>
      <Button
        to={`/mypage/${id}`}
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
        <DialogTitle id="alert-title">{"Pyyntö lähetetty."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"> {"Saat sähköpostiisi vahvistuksen, kun pyyntösi on käsitelty."} </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button to={`/mypage/${id}`} component={Link} variant="contained" color="secondary">
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

export default DeleteInfo;
