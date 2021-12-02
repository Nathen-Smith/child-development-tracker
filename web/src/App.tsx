import React, { useEffect, useState } from "react";
import { Test } from "./components/Test";
import { Login } from "./components/Login";
import { Routes, Route, Link } from "react-router-dom";

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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Sign In</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
