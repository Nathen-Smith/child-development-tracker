import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { AuthProvider, FirebaseAppProvider } from "reactfire";
import { getAuth } from "firebase/auth";
import app, { firebaseConfig } from "./config";
import axios from "axios";

import "./index.css";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://nathensmith-wpfp-server-6v9xp.ondigitalocean.app/api"
    : "http://localhost:8080/api";

const auth = getAuth(app);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/cs498rk_final">
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <AuthProvider sdk={auth}>
          <App />
        </AuthProvider>
      </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
