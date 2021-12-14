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

// import axios from "../axios";

// interface ChangesProps {
//   name: string;
//   index: number;
//   color: string;
//   timeline: string;
// }

export const Changes = () => {
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
                  // bg={color}
                >
                  {/* {timeline + " months"} */}
                  months
                </Badge>
              </div>
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
              <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                <option value="0">Wet</option>
                <option value="1">Dry</option>
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
  );
};
