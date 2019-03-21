import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { blue, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <MyButton />
            </p>
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
