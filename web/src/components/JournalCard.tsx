import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

interface JournalCardProps {
  name?: string;
  text: string;
  title: string;
  createdAt: string;
}

export const JournalCard: React.FC<JournalCardProps> = ({
  title,
  text,
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
      <p className="-mt-4 text-gray-500"> {text} </p>

      {/* <ProgressBar now={50} label={`${50}%`} variant={props.color}  /> */}
      <p className="-mt-4 text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        dictum est, ac vulputate lorem. Vivamus fringilla erat non lacus
        elementum tristique. Donec pulvinar laoreet nulla, quis pulvinar enim
        commodo dignissim. Duis volutpat sapien sit amet dolor eleifend,
        malesuada luctus augue ullamcorper. Suspendisse in tincidunt erat. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Integer nec magna
        imperdiet, dignissim elit et, dignissim mi. Etiam gravida lorem lectus,
        a dictum purus mollis vel. Nulla facilisi. Quisque tellus odio, pulvinar
        mollis turpis vel, commodo elementum justo. Nullam eros nibh,
        consectetur vitae rhoncus non, dictum ac mi. Donec ac mauris dui. Mauris
        eget purus sed libero commodo dapibus. Vestibulum tempus volutpat lorem.
        Nunc dapibus rutrum turpis, vitae finibus odio rhoncus non. In
        hendrerit, urna at mattis posuere, justo metus vehicula ipsum, at
        porttitor mi metus eget lectus. Donec blandit leo bibendum blandit
        tempus. Ut imperdiet eros at gravida commodo. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quisque vestibulum malesuada nulla in
        ultricies. Etiam id nisl diam. Sed vitae lorem et justo semper consequat
        vel et ligula. Suspendisse placerat sapien quis sem imperdiet, vitae
        dictum diam convallis. Donec at arcu convallis, vestibulum nulla nec,
        blandit sem. In at pulvinar dui.
      </p>
    </div>
  );
};
