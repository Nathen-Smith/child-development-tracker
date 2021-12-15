import React from "react";
import { JournalProps } from ".";

export const JournalCard: React.FC<JournalProps> = ({
  title,
  body,
  createdAt,
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg mx-auto max-w-lg 	">
      {/* <div className="relative flex gap-4"> */}
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
        </div>
      </div>
      {/* </div> */}

      <p className="-mt-4 text-gray-500"> {body} </p>
    </div>
    // <div>
    //   <p className="text-xl whitespace-nowrap truncate overflow-hidden">
    //     {new Date(createdAt).toLocaleDateString("en-us", {
    //       weekday: "short",
    //       year: "numeric",
    //       month: "short",
    //       day: "numeric",
    //     })}
    //   </p>
    // </div>
  );
};
