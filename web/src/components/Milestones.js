// import logo from './logo.svg';
import "./App.css";
// import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { StatsCard } from "./StatsCard";
import { MilestoneCard } from "./MilestoneCard";
import { MilestonesData } from "./MilestonesData";

// import { useHistory } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, Button, Accordion, Container, Col, Row, Image, DropdownButton, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'

const axios = require("axios");
// const image1 = require('./img/image1.png');
// const image2 = require('./img/image2.png');
// const image3 = require('./img/image3.png');

export function Milestones(props) {
  // const history = useHistory();

  // [url=https://imgbb.com/][img]https://i.ibb.co/HpXknVP/image1.png[/img][/url]
  // [url=https://imgbb.com/][img]https://i.ibb.co/26zN4bM/image2.png[/img][/url]
  // [url=https://imgbb.com/][img]https://i.ibb.co/NtSHHYj/image3.png[/img][/url]

  return (
    <div>
      <h1 className="text-lg font-semibold text-gray-900 mt-12 ml-12">
        Statistics
      </h1>
      <div
        className="flex flex-row  p-12"
        style={{ "justify-content": "space-between", width: "100%" }}
      >
        <StatsCard color={"primary"} name="Social and Emotional" timeline={6} />
        <StatsCard
          color={"success"}
          name="Language/Communication"
          timeline={6}
        />
        <StatsCard color={"danger"} name="Cognitive Development" timeline={6} />
        <StatsCard color={"warning"} name="Social and Emotional" timeline={6} />
      </div>

      <h1 className="text-lg font-semibold text-gray-900 ml-12">
        Milestone Completion
      </h1>
      <div className="bg-white flex overflow-hidden" style={{ height: "59vh" }}>
        <div>
          <div
            className="flex-auto flex flex-row mt-4 mr-12"
            style={{ height: "5vh" }}
          >
            <div className="overflow-scroll " style={{ height: "56vh" }}>
              <h1 className="text-lg font-regular text-gray-900 ml-12 ">
                Social and Emotional
              </h1>

              {MilestonesData.filter(
                (e) => e.timeline === 6 && e.category === "Social and Emotional"
              ).map((entry) => {
                return (
                  <MilestoneCard
                    milestoneName={entry.milestoneName}
                    timeline={entry.timeline}
                  />
                );
              })}
            </div>
            <div className="overflow-scroll " style={{ height: "56vh" }}>
              <h1 className="text-lg font-regular text-gray-900 ml-12 ">
                Language/Communication
              </h1>
              {MilestonesData.filter(
                (e) =>
                  e.timeline === 6 && e.category === "Language/Communication"
              ).map((entry) => {
                return (
                  <MilestoneCard
                    milestoneName={entry.milestoneName}
                    timeline={entry.timeline}
                  />
                );
              })}
            </div>
            <div className="overflow-scroll " style={{ height: "56vh" }}>
              <h1 className="text-lg font-regular text-gray-900 ml-12 ">
                Cognitive Development
              </h1>
              {MilestonesData.filter(
                (e) => e.timeline === 6 && e.category === "Cognitive"
              ).map((entry) => {
                return (
                  <MilestoneCard
                    milestoneName={entry.milestoneName}
                    timeline={entry.timeline}
                  />
                );
              })}
            </div>
            <div className="overflow-scroll " style={{ height: "56vh" }}>
              <h1 className="text-lg font-regular text-gray-900 ml-12 ">
                Physical Development
              </h1>
              {MilestonesData.filter(
                (e) => e.timeline === 6 && e.category === "Physical"
              ).map((entry) => {
                return (
                  <MilestoneCard
                    milestoneName={entry.milestoneName}
                    timeline={entry.timeline}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Milestones.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
};

//   export ContextCard;
