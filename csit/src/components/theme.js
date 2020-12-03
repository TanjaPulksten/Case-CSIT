import {createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette:{
    primary: {main:"#414042", contrastText:"#FBFAFA"},
    secondary: {main:"#71B7AD", contrastText:"#414042"},
    text: {primary: "#414042", secondary:"#ED1C24", contrastText:"#DDDDDD",
    },
    action: {active:"#ED1C24", hover:"#ED1C24", selected:"#FCB81C"},
    background: {default: "#FBFAFA"},
  },
  typography: {
    fontFamily: ['Avenir', 'Lato', 'sans-serif'],
  },
  overrides: {
    MuiLink: {
      root: {
        color: "secondary", underline: "always",
      }
    },
    MuiButton: {
      root: {
        color:"#FBFAFA", backgroundColor: "#414042", width: 150,
        borderRadius: 20, borderStyle: "solid", borderWidth: 1, borderColor: "#8D8D8D",
        "&&:hover": {color: "#414042", backgroundColor: "#EEEEEE",}
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
    }
  }
})

export default theme
