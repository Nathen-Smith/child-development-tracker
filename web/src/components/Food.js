// import logo from './logo.svg';
import "./App.css";
// import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { StatsCard } from "./StatsCard";
import { JournalCard } from "./JournalCard";
import {
  ProgressBar,
  Badge,
  Form,
  Col,
  Row,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { useUser } from "reactfire";

// import { useHistory } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, Button, Accordion, Container, Col, Row, Image, DropdownButton, Dropdown, InputGroup, FormControl } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'

const axios = require("axios");
// const image1 = require('./img/image1.png');
// const image2 = require('./img/image2.png');
// const image3 = require('./img/image3.png');

export function Food(props) {
  // const history = useHistory();

  // [url=https://imgbb.com/][img]https://i.ibb.co/HpXknVP/image1.png[/img][/url]
  // [url=https://imgbb.com/][img]https://i.ibb.co/26zN4bM/image2.png[/img][/url]
  // [url=https://imgbb.com/][img]https://i.ibb.co/NtSHHYj/image3.png[/img][/url]

  const { data: user } = useUser();
  const [entries, setEntries] = useState([]);

  const getFood = () => {
    if (!user) return;
    axios.get(`http://localhost:8080/api/food?where={"email": ${user.email}&sort={"createdAt": -1}}`)
    .then(response => {
      if (response.code == 200) {
        setEntries(response.data['data']);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="bg-white flex overflow-hidden">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
          <div className="relative flex gap-4">
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <p
                  className="relative text-xl whitespace-nowrap truncate overflow-hidden mr-12"
                  style={{ width: "240px" }}
                >
                  Food
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

          <Form>
            <p
              className="relative text-lg whitespace-nowrap truncate overflow-hidden mr-12 mb-2"
              style={{ width: "240px" }}
            >
              Type Of Food
            </p>

            <Form.Group as={Row} className="mb-3 ml-3 mr-3">
              <Row>
                <Col>
                  <Form.Check type="checkbox" label="Milk" />
                  <Form.Check type="checkbox" label="Formula" />
                  <Form.Check type="checkbox" label="Dairy" />
                  <Form.Check type="checkbox" label="Fruit" />
                </Col>
                <Col>
                  <Form.Check type="checkbox" label="Meat" />
                  <Form.Check type="checkbox" label="Bread" />
                  <Form.Check type="checkbox" label="Juice" />
                </Col>
              </Row>
            </Form.Group>

            <p
              className="relative text-lg whitespace-nowrap truncate overflow-hidden mr-12 mb-2 mt-6"
              style={{ width: "240px" }}
            >
              Time Of Feeding
            </p>

            <FloatingLabel
              controlId="floatingInput"
              label="Time HH::MM"
              className="mb-3 mr-3 ml-3"
            >
              <Form.Control type="" placeholder="HH:MM" />
            </FloatingLabel>

            <p
              className="relative text-lg whitespace-nowrap truncate overflow-hidden mr-12 mb-2 mt-6"
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
              />
            </FloatingLabel>

            <Form.Group as={Row} className="mb-3 ml-6 mr-6 mt-12 ">
              <Button type="submit">Save</Button>
            </Form.Group>
          </Form>
          {/* <p className="-mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Maxime quisquam vero adipisci beatae voluptas dolor ame.</p> */}
        </div>
      </div>
      <div>
        <div className="overflow-scroll pt-12" style={{ height: "94vh" }}>
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
  );
}

Food.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
};

//   export ContextCard;
