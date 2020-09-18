import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import Collaborators from "./pages/colaborators";
import SupportPage from "./pages/support";
import TeamPage from "./pages/team";
import IndexPage from "./pages";
import { initializeGA, pageViewGA } from "./components/GoogleAnalytics";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./assets/Theme";

function App() {
  initializeGA();
  pageViewGA({ path: window.location.pathname + window.location.search });
  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/colaborators" component={Collaborators} />
          <Route exact path="/support" component={SupportPage} />

          <Route exact path="/" component={IndexPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
