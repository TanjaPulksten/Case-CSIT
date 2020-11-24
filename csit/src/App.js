import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import MyPage from './pages/mypage.js';
import users from './components/users.json';

const theme = createMuiTheme({
  palette:{
    primary: {main:"#FBFAFA", contrastText:"#414042"},
    secondary: {main:"#EAEAEA", contrastText:"#414042"},
    text: {primary: "#414042", secondary:"#ED1C24", contrastText:"#DDDDDD"},
    action: {active:"#ED1C24", hover:"#ED1C24", selected:"#FCB81C"}
  },
  typography: {
    fontFamily: ['Avenir', 'Lato', 'sans-serif'],
  },
  overrides: {
    MuiButton: {
      root: {
        color:"#FBFAFA", backgroundColor: "#414042",
        "&&:hover": {color: "#414042", backgroundColor: "#FBFAFA",
              borderStyle: "solid", borderWidth: 1, borderColor: "#8D8D8D" }
      }
    }
  }
})


function App() {
  const classes = useStyles();


  return (
    <MuiThemeProvider theme = {theme}>
      <BrowserRouter>
        <div>
          <Paper elevation={5} className={classes.container}>
            <img src='./images/csit-logo-oikea.png' alt='logo' />
            <Typography className={classes.header}>CIST</Typography>
          </Paper>
          <Switch>
            <Route exact path="/" component={MyPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles({
  header: {
    fontFamily: ['Avenir', 'Lato', 'sans-serif'],
    color: "#414042",
    fontSize: 45,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: "#FBFAFA",
    borderWidth: 0,
  }

});

export default App;
