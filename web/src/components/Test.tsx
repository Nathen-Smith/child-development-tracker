import React, { useState, useEffect } from "react";

export const Test = () => {
  const [testRes, setTestRes] = useState("");
  useEffect(() => {
    async function test() {
      try {
        const res = await fetch("/test");
        const resJson = await res.json();
        setTestRes(resJson.data);
      } catch (err) {
        console.log("err");
      }
    }
    test();
  }, []);

  if (!testRes) return <div>{`No data returned from server`}</div>;
  return <div>{`Data from server: "${testRes}"`}</div>;
};
