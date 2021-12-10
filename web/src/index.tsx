import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { AuthProvider, FirebaseAppProvider } from "reactfire";
import { getAuth } from "firebase/auth";
import app, { firebaseConfig } from "./config";
import './index.css'

const auth = getAuth(app);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <AuthProvider sdk={auth}>
          <App />
        </AuthProvider>
      </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
