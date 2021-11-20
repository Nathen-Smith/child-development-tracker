import React, { useEffect, useState } from "react";
import { Test } from "./components/Test";

function App() {
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
  return (
    <div>
      <Test data={testRes} />
    </div>
  );
}

export default App;
