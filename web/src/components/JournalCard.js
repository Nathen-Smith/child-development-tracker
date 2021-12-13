import './App.css';
import { React, useEffect, useState } from "react";
import PropTypes from 'prop-types';
// import { useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar, Badge } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'

const axios = require('axios');
const image1 = require('./img/image1.png');



export function JournalCard(props) {

    return (
        <div class="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg mr-12 ml-12 w-12/12	">
            <div class="relative flex gap-4">
                <div class="flex flex-col w-full">
                    <div class="flex flex-row justify-between">
                        <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">{props.title}</p>
                        <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">{new Date(props.createdAt).toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric"}) }</p>
                        
                        {/* <Badge style={{'height': "20px"}} class="mt-6" bg={props.color}>{props.timeline + " months"}</Badge> */}

                    </div>
                </div>
            </div>
            
            {/* <ProgressBar now={50} label={`${50}%`} variant={props.color}  /> */}
            <p class="-mt-4 text-gray-500"> {props.text}    </p>
        </div>

    )
}

JournalCard.propTypes = {
    name: PropTypes.string,
    index: PropTypes.number,
};

//   export ContextCard;
