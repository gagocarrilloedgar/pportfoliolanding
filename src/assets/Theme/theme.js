import { createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    //type:dark // changes the main theme to a darker one
    primary: {
      main: "#2255ff",
      contrastText: "white",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#2255ff",
    },
    blue: {
      backgroundColor: "#2255ff",
      color: "white",
    },
  },
});

export default theme;
