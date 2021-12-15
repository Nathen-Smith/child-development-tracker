// import logo from './logo.svg';
import React, { useState } from "react";
import PropTypes from "prop-types";
// import { StatsCard } from "./StatsCard";
import { JournalCard } from "./journal/JournalCard";

// import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {ChangesEntries} from "./ChangesEntries";

// import { useHistory } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, Button, Accordion, Container, Col, Row, Image, DropdownButton, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'

import axios from "../axios";
// const image1 = require('./img/image1.png');
// const image2 = require('./img/image2.png');
// const image3 = require('./img/image3.png');

export function Changes(props) {
  // const history = useHistory();

  const [value, setValue] = useState("wet"),
    onInput = ({ target: { value } }) => {
      setValue(value);
      console.log(value);
    },
    onFormSubmit = (e) => {
      e.preventDefault();
      console.log(value);
      setValue();
    };

  const [hour, setHour] = useState(),
    onInputHour = ({ target: { value } }) => {
      setHour(value);
      console.log(value);
    },
    onFormSubmitHour = (e) => {
      e.preventDefault();
      console.log(value);
      setValue();
    };

  const [comments, setComments] = useState(),
    onInputComments = ({ target: { value } }) => {
      setComments(value);
      console.log(value);
    },
    onFormSubmitComments = (e) => {
      e.preventDefault();
      console.log(value);
      setValue();
    };

  function saveChanges(e) {
    console.log(value);
    console.log(hour);
    console.log(comments);

    e.preventDefault()

    axios
      .post("http://localhost:8080/api/changes", {
        consistency: value,
        time: new Date(hour),
        notes: comments,
        email: "joe123@gmail.com",
      })
      .then(function (response) {
        // setdataValue(response.data);
        //   console.log(response.data['data']);
        // setHasBeenCompleted(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="bg-white flex overflow-hidden">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
          <div class="relative flex gap-4">
            <div class="flex flex-col w-full">
              <div class="flex flex-row justify-between">
                <p
                  class="relative text-xl whitespace-nowrap truncate overflow-hidden mr-12"
                  style={{ width: "240px" }}
                >
                  Changes
                </p>
                <Badge
                  style={{ height: "20px" }}
                  class="mt-6 ml-6"
                  bg={props.color}
                >
                  {props.timeline + " months"}
                </Badge>
              </div>
            </div>
          </div>

          <Form>
            <p
              class="relative text-lg whitespace-nowrap truncate overflow-hidden mr-12 mb-2"
              style={{ width: "240px" }}
            >
              Consistency
            </p>

            <Form.Group as={Row} className="mb-3 ml-3 mr-3">
              <Form.Select
                onChange={onInput}
                className="me-sm-2"
                id="inlineFormCustomSelect"
              >
                <option value="wet">Wet</option>
                <option value="dry">Dry</option>
              </Form.Select>
            </Form.Group>

            <p
              class="relative text-lg whitespace-nowrap truncate overflow-hidden mr-12 mb-2 mt-6"
              style={{ width: "240px" }}
            >
              Time Of Change
            </p>

            <FloatingLabel
              controlId="floatingInput"
              label="Time YYYY-MM-DD HH:MM"
              className="mb-3 mr-3 ml-3"
            >
              <Form.Control
                type=""
                placeholder="YYYY-MM-DD HH:MM"
                onChange={onInputHour}
              />
            </FloatingLabel>

            <p
              class="relative text-lg whitespace-nowrap truncate overflow-hidden mr-12 mb-2 mt-6"
              style={{ width: "240px" }}
            >
              Notes & Comments
            </p>

            <FloatingLabel
              controlId="floatingTextarea2"
              label="Comments"
              className="ml-3 mr-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                onChange={onInputComments}
              />
            </FloatingLabel>

            <Form.Group as={Row} className="mb-3 ml-6 mr-6 mt-12 ">
              {/* <Button type="submit">Save</Button> */}

              <button
                class="h-10 px-6 font-semibold rounded-md bg-indigo-700 text-white"
                type="submit"
                onClick={saveChanges}
              >
                Save
              </button>
            </Form.Group>
          </Form>
          {/* <p class="-mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Maxime quisquam vero adipisci beatae voluptas dolor ame.</p> */}
        </div>
      </div>
      <div>
        <div className="overflow-scroll pt-12" style={{ height: "94vh" }}>
          {/* <JournalCard />
          <JournalCard />
          <JournalCard />
          <JournalCard />
          <JournalCard />
          <JournalCard /> */}
          <ChangesEntries update={false} />
        </div>
      </div>
    </div>

    // </div>
    // </div>
  );
}

Changes.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
};

//   export ContextCard;
