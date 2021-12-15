import React from "react";

export const HomeNoAuth = () => {
  return (
    <div>
      <body style={{ backgroundColor: "#fffbcf", height: "100vh" }}>
        <div
          style={{
            padding: "200px",
            color: "#021e6e",

            textAlign: "center",
            backgroundColor: "#d9fcfc",
          }}
        >
          <p style={{ fontSize: "4em" }}>
            Child Development Tracker {"\u2600"}
          </p>
          <br />
          <div className="flex flex-row max-w-7xl mx-auto justify-between">
            <p className="mx-auto text-2xl max-w-xs">
              Track your child's development according to CDC milestones
            </p>
            <p className="mx-auto text-2xl max-w-sm">
              Record food, changes, and journals
            </p>
            <p className="mx-auto text-2xl max-w-sm">Login for free!</p>
          </div>
        </div>
      </body>
    </div>
  );
};
