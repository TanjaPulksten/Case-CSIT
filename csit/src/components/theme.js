import {createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette:{
    primary: {main:"#414042", light: "#8D8D8D", contrastText:"#FBFAFA"},
    secondary: {main:"#71B7AD", contrastText:"#414042"},
    text: {primary: "#414042", secondary:"#8D8D8D", contrastText:"#DDDDDD"},
    background: {default: "#FBFAFA"},
  },
  typography: {
    fontFamily: ['Avenir', 'Lato', 'sans-serif'],
  },
  overrides: {
    MuiTypography: {
      body2: { // Use this in links
        color: "#414042", textDecoration:"underline", fontSize:17,
        "&&:hover": {color: "#71B7AD"}
      },
      h2:{
        fontSize:35, marginBottom: 20,
      },
      h3:{
        fontSize: 25, marginBottom: 15, color: "#ED1C24"
      }
    },
    MuiButton: {
      containedPrimary: {
        color:"#FBFAFA", backgroundColor: "#414042", padding:"7px 20px 7px 20px",
        borderRadius: 20, borderStyle: "solid", borderWidth: 1, borderColor: "#8D8D8D",
        "&&:hover": {color: "#414042", backgroundColor: "#DDDDDD",}
      },
      containedSecondary:{
        color:"#414042", backgroundColor: "#EEEEEE", padding:"7px 20px 7px 20px",
        borderRadius: 20, borderStyle: "solid", borderWidth: 1, borderColor: "#8D8D8D",
        "&&:hover": {color: "#414042", backgroundColor: "#DDDDDD",}
      }
    },
    MuiTextField: {
      root: {
        '& label': {color:'#8D8D8D'},
        '& label.Mui-focused': {color: '#414042',},
        '& .MuiOutlinedInput-root': {
          '& fieldset': {borderColor: '#8D8D8D',},
          '&:hover fieldset': {borderColor: '#71B7AD',},
          '&.Mui-focused fieldset': {borderColor: '#71B7AD',},
        },
      }
    },
    MuiDialogTitle: {
      root: {
        color:"#FBFAFA", backgroundColor: "#414042"
      }
    },
    MuiDialogActions: {
      root: {
        backgroundColor: "#414042"
      }
    },
    MuiDialogContentText:{
      root:{
        backgroundColor: "#414042", color:"#FBFAFA"
      }
    },
    MuiDialogContent:{
      root:{
        backgroundColor: "#414042"
      }
    },
  }
})

export default theme
