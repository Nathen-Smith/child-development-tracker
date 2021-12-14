// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { JournalCard } from "./JournalCard";
import { Badge, Form, Row, FloatingLabel } from "react-bootstrap";

import axios from "../axios";

export function Changes(props) {
  const [value, setValue] = useState("wet");
  const [hour, setHour] = useState();
  const [comments, setComments] = useState();

  function saveChanges() {
    console.log(value);
    console.log(hour);
    console.log(comments);

    axios
      .post("/changes", {
        consistency: value,
        time: new Date(hour),
        notes: comments,
        email: "joe123@gmail.com",
      })
      .then(function (res) {})
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
                  Changes
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

            <Form>
              <p
                className="relative text-lg whitespace-nowrap truncate overflow-hidden mr-12 mb-2"
                style={{ width: "240px" }}
              >
                Consistency
              </p>

              <Form.Group as={Row} className="mb-3 ml-3 mr-3">
                <Form.Select
                  // onChange={onInput}
                  className="me-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option value="wet">Wet</option>
                  <option value="dry">Dry</option>
                </Form.Select>
              </Form.Group>

              <p
                className="relative text-lg whitespace-nowrap truncate overflow-hidden mr-12 mb-2 mt-6"
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
                  // onChange={onInputHour}
                />
              </FloatingLabel>

              <p
                className="relative text-lg whitespace-nowrap truncate overflow-hidden mr-12 mb-2 mt-6"
                style={{ width: "240px" }}
              >
                {"Notes & Comments"}
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
                  // onChange={onInputComments}
                />
              </FloatingLabel>

              <Form.Group as={Row} className="mb-3 ml-6 mr-6 mt-12 ">
                {/* <Button type="submit">Save</Button> */}

                <button
                  className="h-10 px-6 font-semibold rounded-md bg-indigo-700 text-white"
                  type="submit"
                  onClick={saveChanges}
                >
                  Save
                </button>
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
    </div>
  );
}

Changes.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
};
