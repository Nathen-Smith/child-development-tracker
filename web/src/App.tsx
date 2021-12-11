import React, { useEffect, useState } from "react";
import { Test } from "./components/Test";
import { Routes, Route, Link } from "react-router-dom";
import { SignIn } from "./components/auth/SignIn";
import { SignOut } from "./components/auth/SignOut";
import { useUser } from "reactfire";

export default function App() {
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
        <Link
          to="/"
          className="text-gray-400 hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </Link>
        <Link
          to="/test"
          className="text-gray-400 hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
        >
          Test
        </Link>
        <SignIn />
        <SignOut />
        {user && (
          <span className="px-3 py-2 rounded-md text-sm font-medium">
            Signed in as {user.displayName}
          </span>
        )}
      </nav>

      <Routes>
        <Route path="/test" element={<Test data={testRes} />} />
      </Routes>
    </div>
  );
}
