import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


import users from '../components/users.json'

function DeleteInfo() {
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
      <Typography className={classes.header}>Pyydä tietojen poistoa</Typography>
      <Typography className={classes.header2}>Mitä tietojen poistaminen tarkoittaa?</Typography>

      <div style={{maxWidth: 400}}>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</Typography> <br/>
        <Typography>Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</Typography>
      </div>

      <TextField
        required
        id="salasana"
        label="Anna salasana"
        type="password"
        variant="outlined"
        size="small"
        style={{marginBottom:15, marginTop: 25}} />

      <Button onClick={handleClickOpen} style={{marginBottom: 10}}>Lähetä</Button>
      <Button to="/mypage" component={Link} style={{marginBottom: 20}}>Peruuta</Button>


      <Dialog
        open={show}
        onClose={handleClose}
        aria-labelledby="alert-title">
        <DialogTitle id="alert-title">{"Pyyntö lähetetty. Saat sähköpostiisi vahvistuksen, kun pyyntösi on käsitelty."}</DialogTitle>
        <DialogActions>
          <Button to="/mypage" component={Link} color="secondary">
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
  header2: {
    fontSize: 25,
    marginBottom: 15,
    color: "#ED1C24"
  },
  container: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DeleteInfo;
