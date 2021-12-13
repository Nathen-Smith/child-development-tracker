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



export function MilestoneCard(props) {

    return (
        <div class="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg mr-12 ml-12">
            <div class="relative flex gap-4">
                <div class="flex flex-col w-full">
                    <div class="flex flex-row justify-between">
                        <p class="relative text-xl" style={{'display': 'block', 'overflow': 'auto', 'width': '80%', 'height': '10vh'}}>Can follow 1-step verbal commands without any gestures</p>
                        {/* <Badge style={{'height': "20px"}} class="mt-6" bg={props.color}>{props.timeline + " months"}</Badge> */}
                        <button class="h-10 px-6 font-semibold rounded-md bg-indigo-700 text-white" type="submit">
          Done
        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

MilestoneCard.propTypes = {
    name: PropTypes.string,
    index: PropTypes.number,
};

//   export ContextCard;
