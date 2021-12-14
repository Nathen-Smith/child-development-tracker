import React from "react";
import { JournalCard } from "./JournalCard";

import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

interface FoodProps {
  color: string;
  timeline: number;
}

export const Food: React.FC<FoodProps> = ({ color, timeline }) => {
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
                  bg={color}
                >
                  {timeline + " months"}
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
          <JournalCard text="text" title="title" createdAt="createdAt" />
          <JournalCard text="text" title="title" createdAt="createdAt" />
          <JournalCard text="text" title="title" createdAt="createdAt" />
          <JournalCard text="text" title="title" createdAt="createdAt" />
          <JournalCard text="text" title="title" createdAt="createdAt" />
          <JournalCard text="text" title="title" createdAt="createdAt" />
        </div>
      </div>
    </div>
  );
};
