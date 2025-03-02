import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link} from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import MyPage from './pages/mypage.js';
import ForgotPassword from './pages/forgotpassword.js';
import UpdateInfo from './pages/updatemyinfo.js';
import GetInfo from './pages/getmyinfo.js';
import DeleteInfo from './pages/deletemyinfo.js';
import LogIn from './pages/login.js';
import ChangePassword from './pages/changepassword.js';

import logo from './images/csit-logo-oikea.png';
import theme from './components/theme.js';


function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme = {theme}>
      <CssBaseline />
      <BrowserRouter>
        <div style={{alignItems:"center"}}>
          <Paper elevation={5} className={classes.container}>
            <img src={logo} alt='logo' style={{height: 50, margin:5}}/>
            <div style={{display:"flex", flexDirection:"row"}}>
              <Typography variant="body2" style={{fontWeight: "bold", marginRight:30}} to="/" component={Link}>Kirjaudu ulos</Typography>
              <Typography style={{fontWeight: "bold", color:"#ED1C24", marginRight:5}}>FI</Typography>
              <Typography style={{fontWeight: "bold"}}>SV EN</Typography>
            </div>
          </Paper>

          <Switch>
            <Route exact path="/"> <LogIn /> </Route>
            <Route path="/forgot"> <ForgotPassword /> </Route>
            <Route path="/mypage/:id"> <MyPage /> </Route>
            <Route path="/changepassword/:id"> <ChangePassword /> </Route>
            <Route path="/update/:id"> <UpdateInfo /> </Route>
            <Route path="/getmydata/:id"> <GetInfo /> </Route>
            <Route path="/delete/:id"> <DeleteInfo /> </Route>
            <Route> <LogIn /> </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles({
  container: {
    flex: 1,
    display:"flex",
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems: "center",
    backgroundColor: "#FBFAFA",
    borderWidth: 0,
    marginBottom: 30,
    padding:"0px 15px 0px 15px"
  }

});

export default App;
