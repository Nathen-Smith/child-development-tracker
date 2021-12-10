import React, { useEffect, useState } from "react";
import { Test } from "./components/Test";
import { Routes, Route, Link } from "react-router-dom";
import { SignIn } from "./components/auth/SignIn";
import { SignOut } from "./components/auth/SignOut";
import { useUser } from "reactfire";

function App() {
  // const { status, data: signInCheckResult } = useSigninCheck();
  // https://github.com/FirebaseExtended/reactfire/blob/main/docs/use.md#auth
  // can use signInCheckResult.signedIn to check whether signed in or not
  const { data: user } = useUser();

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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
        <SignIn />
        <SignOut />
        {user && <>Signed in as {user.displayName}</>}
      </nav>

      <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
        Button
      </button>
      </div>

      <Routes>
        <Route path="/test" element={<Test data={testRes} />} />
      </Routes>
    </div>
  );
}

export default App;
