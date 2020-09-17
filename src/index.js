import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./pages/App/App";
import * as serviceWorker from "./serviceWorker";
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route render={({ history }) => <App history={history} />} />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
