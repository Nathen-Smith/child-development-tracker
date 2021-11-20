import React from "react";

interface TestData {
  data: string | null;
}

export const Test: React.FC<TestData> = ({ data }) => {
  if (!data) return <div>{`No data returned from server`}</div>;
  return <div>{`Data from server: "${data}"`}</div>;
};
