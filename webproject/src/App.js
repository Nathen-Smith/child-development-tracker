import logo from './logo.svg';
import './App.css';
import { React, useEffect, useState } from "react";
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, Button, Accordion, Container, Col, Row, Image, DropdownButton, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import { useHistory } from 'react-router-dom';
import {Home} from './Home';

const axios = require('axios');



function App() {
  return (
    <div className="App">
      <Home />
    </div>

    
  );
}

export default App;
