import logo from './logo.svg';
import './App.css';
import { React, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { StatsCard } from './StatsCard';
import { JournalCard } from './JournalCard';

// import { useHistory } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, Button, Accordion, Container, Col, Row, Image, DropdownButton, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'

const axios = require('axios');
const image1 = require('./img/image1.png');
const image2 = require('./img/image2.png');
const image3 = require('./img/image3.png');




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



    <div className="min-h-screen bg-white flex overflow-hidden">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <h1 class="text-lg font-semibold text-gray-900">Child Development Monitor</h1>
          <div class="columns-3 mt-6">
            <div class="column">
              <img src={image1} alt="logo" />
            </div>
            <div class="column">
              <div class="column">
                <img src={image2} alt="logo" />
              </div>
            </div>
            <div class="column">
              <div class="column">
                <img src={image3} alt="logo" />
              </div>
            </div>
          </div>
        </div>

        <h1 class="text-lg font-semibold text-gray-900 mt-12">Statistics</h1>

        <StatsCard color={'primary'} name="Social and Emotional" timeline={6} />
        <StatsCard color={'success'} name="Language/Communication" timeline={6} />
        <StatsCard color={'danger'} name="Cognitive Development" timeline={6} />
        <StatsCard color={'warning'} name="Social and Emotional" timeline={6} />


      </div>
      <div>

      <div class="flex-auto flex flex-row-reverse mt-12 mr-12" style={{ 'height': '5vh' }}>
        <button class="h-10 px-6 font-semibold rounded-md bg-indigo-700 text-white" type="submit">
          New Journal Entry
        </button>
        <button class="h-10 px-6 font-semibold rounded-md border border-gray-200 text-gray-900 mr-6" type="button">
          Update Milestones
        </button>
      </div>
        <div className='overflow-scroll pt-12' style={{ 'height': '95vh' }}>
          <JournalCard />
          <JournalCard />
          <JournalCard />
          <JournalCard />
          <JournalCard />
          <JournalCard />
        </div>

      </div>




    </div>


    // </div>
    // </div>

  )
}

Home.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
};

//   export ContextCard;
