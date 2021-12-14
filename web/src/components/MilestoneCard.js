import "./App.css";
import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../axios";

export function MilestoneCard(props) {
  const [hasBeenCompleted, setHasBeenCompleted] = useState(false);
  useEffect(() => {
    console.log(
      'http://localhost:8080/api/milestone?where={"title": "' +
        props.milestoneName +
        '", "timeline":' +
        props.timeline +
        ', "email": "joe123@gmail.com"}'
    );
    axios
      .get(
        'http://localhost:8080/api/milestone?where={"title": "' +
          props.milestoneName +
          '", "timeline":' +
          props.timeline +
          ', "email": "joe123@gmail.com"}'
      )
      .then(function (response) {
        // setdataValue(response.data);
        console.log(response.data["data"]);
        setHasBeenCompleted(response.data["data"].length > 0);
        // console.log("dataValue");
        // console.log(dataValue)

        // (response.data['data'].length > 0) : setHasBeenCompleted(true) ? setHasBeenCompleted(false)

        // setIdNumber(response.data.id)
        // console.log(idNumber)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.milestoneName, props.timeline]);

  function postMilestone() {
    axios
      .post("/milestone", {
        title: props.milestoneName,
        timeline: props.timeline,
        email: "joe123@gmail.com",
      })
      .then(function (response) {
        // setdataValue(response.data);
        //   console.log(response.data['data']);
        setHasBeenCompleted(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg mr-12 ml-12">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p
              className="relative text-xl"
              style={{
                display: "block",
                overflow: "auto",
                width: "80%",
                height: "10vh",
              }}
            >
              {props.milestoneName}
            </p>
            {/* <Badge style={{'height': "20px"}} className="mt-6" bg={props.color}>{props.timeline + " months"}</Badge> */}
            {console.log(hasBeenCompleted)}
            {hasBeenCompleted ? (
              <button
                className="h-10 px-6 font-semibold rounded-md bg-indigo-700 text-white"
                type="submit"
              >
                Done
              </button>
            ) : (
              <button
                className="h-10 px-6 font-semibold rounded-md border border-gray-200 text-gray-900 ml-6"
                type="submit"
                onClick={postMilestone}
              >
                Complete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

MilestoneCard.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
};

//   export ContextCard;
