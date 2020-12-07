import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

import users from '../components/users.json'

function ChangePassword() {
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
      <Typography className={classes.header}>Vaihda salasanasi</Typography>

      <TextField
        required
        id="password"
        label="Syötä nykyinen salasana"
        variant="outlined"
        size="small"
        style={{marginTop: 5, marginBottom: 15}}/>

      <Paper elevation={0} className={classes.paper}>
        <InfoIcon style={{color:"#ED1C24", marginRight:5 }}/>
        <Typography style={{fontSize:12}}>Salasanan tulee sisältää vähintään 8 merkkiä, iso kirjain, numero sekä erikoismerkki</Typography>
      </Paper>

      <TextField
        required
        id="newpassword"
        label="Anna uusi salasana"
        variant="outlined"
        size="small"
        style={{marginTop: 5, marginBottom: 10}}/>

      <TextField
        required
        id="newpasswordagain"
        label="Toista uusi salasana"
        variant="outlined"
        size="small"
        style={{marginTop: 5, marginBottom: 20}}/>

      <Button onClick={handleClickOpen} variant="contained" color="primary" style={{marginBottom: 10}}>Vaihda</Button>
      <Button to="/mypage" component={Link} variant="contained" color="secondary" style={{marginBottom: 20}}>Peruuta</Button>

      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-title">
        <DialogTitle id="alert-title">{"Salasanan vaihto onnistui!"}</DialogTitle>
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
  paper: {
    display:"flex",
    flexDirection:"row",
    backgroundColor:"#EAEAEA",
    width: 220,
    padding:5,
  },
});

export default ChangePassword;
