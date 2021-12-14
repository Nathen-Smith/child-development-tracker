import "./App.css";
import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar, Badge } from "react-bootstrap";
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'

const axios = require("axios");
// const image1 = require("/assets/image1.png");

export function StatsCard(props) {
  return (
    <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p
              className="relative text-xl whitespace-nowrap truncate overflow-hidden mr-12"
              style={{ width: "240px" }}
            >
              {props.name}
            </p>
            <Badge
              style={{ height: "20px" }}
              className="mt-6 ml-6"
              bg={props.color}
            >
              {props.timeline + " months"}
            </Badge>
          </div>
        </div>
      </div>

      <ProgressBar now={50} label={`${50}%`} variant={props.color} />
      {/* <p className="-mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Maxime quisquam vero adipisci beatae voluptas dolor ame.</p> */}
    </div>
  );
}

StatsCard.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
};

//   export ContextCard;
