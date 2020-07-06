import "./App.css";
import React from "react";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/services">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/impressum">
            <About />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
