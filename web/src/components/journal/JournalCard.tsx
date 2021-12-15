import React from "react";
import { JournalProps } from ".";

export const JournalCard: React.FC<JournalProps> = ({
  title,
  body,
  createdAt,
}) => {
  return (
    <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg mr-12 ml-12 w-12/12	">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
              {title}
            </p>
            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
              {new Date(createdAt).toLocaleDateString("en-us", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>

            {/* <Badge style={{'height': "20px"}} className="mt-6" bg={props.color}>{props.timeline + " months"}</Badge> */}
          </div>
        </div>
      </div>

      {/* <ProgressBar now={50} label={`${50}%`} variant={props.color}  /> */}
      <p className="-mt-4 text-gray-500"> {body} </p>

      {/* <ProgressBar now={50} label={`${50}%`} variant={props.color}  /> */}
      {/* <p className="-mt-4 text-gray-500">
        
      </p> */}
    </div>
  );
};
