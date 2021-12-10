import logo from './logo.svg';
import './App.css';
import { React, useEffect, useState } from "react";
import PropTypes from 'prop-types';
// import { useHistory } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, Button, Accordion, Container, Col, Row, Image, DropdownButton, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'

const axios = require('axios');
const image1 = require('./img/image1.png'); 



export function Home(props) {

  const [dataValue, setdataValue] = useState({ 'id': 0 })
  const [idNumber, setIdNumber] = useState(1)



  useEffect(() => {
    console.log('https://pokeapi.co/api/v2/pokemon/' + (props.name));
    axios.get('https://pokeapi.co/api/v2/pokemon/' + (props.name))
      .then(function (response) {
        setdataValue(response.data);
        console.log('dataValue')
        console.log(dataValue)

        setIdNumber(response.data.id)
        console.log(idNumber)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.name]);

  // const history = useHistory();

  return (
    // <div class="space-y-4">
    //   <h2 class="mt-5">Child Development Monitor</h2>
    //   <div class="columns-2 ">
    //     <div class="column lg:w-1/3 md:w-1/2 w-full">
    //       <div class="columns-3 mt-6">
    //         <div class="column">
    //           <img src={image1} alt="logo" />
    //         </div>
    //         <div class="column">
    //         <div class="column">
    //           <img src={image1} alt="logo" />
    //         </div>
    //         </div>
    //         <div class="column">
    //         <div class="column">
    //           <img src={image1} alt="logo" />
    //         </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="column">
    //       hello
    //     </div>
    //   </div>
    // </div>



<div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
        <h1 class="text-lg font-semibold text-gray-900">Child Development Monitor</h1> 
        <div class="columns-3 mt-6">
            <div class="column">
              <img src={image1} alt="logo" />
            </div>
            <div class="column">
            <div class="column">
              <img src={image1} alt="logo" />
            </div>
            </div>
            <div class="column">
            <div class="column">
              <img src={image1} alt="logo" />
            </div>
            </div>
          </div>
        </div>

        <h1 class="text-lg font-semibold text-gray-900 mt-12">Statistics</h1> 


      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d2g27qhphzrmc0.cloudfront.net/omsWebAssets/images/joshua-earle-9idqIGrLuTE-unsplash.jpg"
          alt=""
        />
      </div>
    </div>

  )
}

Home.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
};

//   export ContextCard;
