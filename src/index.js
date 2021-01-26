import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/Navigation';
import App from './App';
import {Button, goLink} from "./components/Button"

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <App />
    <Button onClick = {goLink}
    type="button"
    buttonStyle="btn--primary--outline"
    buttonSize="btn--large"
    > LET'S GO!! </Button>
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
