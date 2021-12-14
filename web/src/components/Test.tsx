import React, { useState, useEffect } from "react";
import axios from "../axios";

export const Test = () => {
  const [testRes, setTestRes] = useState("");
  useEffect(() => {
    async function test() {
      try {
        const res = await axios.get("/test");
        setTestRes(res.data.data);
      } catch (err) {
        console.log("err");
      }
    }
    test();
  }, []);

  if (!testRes) return <div>{`No data returned from server`}</div>;
  return <div>{`Data from server: "${testRes}"`}</div>;
};
