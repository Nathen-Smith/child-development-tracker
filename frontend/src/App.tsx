import React, { useEffect, useState } from "react";

function App() {
  const [testRes, setTestRes] = useState("");
  useEffect(() => {
    async function test() {
      try {
        const res = await fetch("http://localhost:5000");
        const resJson = await res.json();
        setTestRes(resJson.data);
      } catch (err) {
        console.log("err");
      }
    }
    test();
  }, []);
  return <div className="App">{`Data from server: "${testRes}"`}</div>;
}

export default App;
