import "./App.css";
import React from "react";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyle from "./GlobalStyles";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Header>Test</Header>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
