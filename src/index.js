<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
=======
import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
>>>>>>> 4d246df4cf2f4182826d23db9c78d8e3c7d77f05

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
