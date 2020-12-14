import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import userCommands from '../components/userdatacommands.js';

import HaeOmatTiedot from '../components/omattiedot.js';
import HaeTyoTiedot from '../components/tyotiedot.js';

function MyPage(props, {location}) {
  const classes = useStyles();
  const [userData, setUserData] = useState([])
  const {id} = useParams();

  useEffect(() => {
    console.log("useEffect: mypage")
    userCommands // get users from db.json server
      .getAll()
      .then(response => {
        let user = response.data.find(user => user.id === id)
        setUserData(user)
    })
    .catch(error => {
      console.log(error)
    })
  },[id]);

  return (
    <div className={classes.container}>
      <Grid container spacing={8}>

        <Grid container item xs={12} sm={6} alignContent="flex-end" direction="column">
          {HaeOmatTiedot(userData)}
          <Paper elevation={4} className={classes.paper}>
            <Typography to= {`/changepassword/${id}`} component={Link} variant="body2">Vaihda salasana</Typography> <br/>
            <Typography to= {`/update/${id}`} component={Link} variant="body2">Työsuhdetietojen päivityspyyntö</Typography> <br/>
            <Typography to= {`/getmydata/${id}`} component={Link} variant="body2">Omien käyttäjätietojen tilaus</Typography> <br/>
            <Typography to= {`/delete/${id}`} component={Link} variant="body2">Tietojen poistopyyntö</Typography>
          </Paper>
        </Grid>

        <Grid container item xs={12} sm={6} alignContent="flex-start" direction="column">
          {HaeTyoTiedot(userData)}
        </Grid>

      </Grid>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    display: "flex",
    marginLeft: 50,
    marginRight: 50,
  },
  paper: {
    padding: "15px 10px 15px 40px",
    width: 300,
    backgroundColor: "#FBFAFA",
    marginTop: 20,
  },
});

export default MyPage;
