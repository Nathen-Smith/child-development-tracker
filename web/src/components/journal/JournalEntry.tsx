import React, { useState } from "react";
import axios from "../../axios";
import { useUser } from "reactfire";

export const JournalEntry = () => {
  const { data: user } = useUser();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [err, setErr] = useState(false);

  async function postJournal(title: string, body: string) {
    try {
      const post = {
        title: title,
        body: body,
        email: user!.email,
      };
      await axios.post("/journal", post);

      setTitle("");
      setBody("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-lg font-semibold text-gray-900 ">
        New Journal Entry
      </h1>

      {err && <div className="text-red-500">Must fill out all fields</div>}

      <label className="mt-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Title
      </label>

      <input
        className="flex md:w-1/2 lg:w-1/2appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label className="mt-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Entry
      </label>

      <textarea
        className="flex md:w-1/2 lg:w-3/4 h-96 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        rows={5}
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />
      <button
        className="w-20  bg-indigo-600 text-white  border border-indigo-600 font-semibold h-10 px-2 rounded"
        onClick={async (e) => {
          e.preventDefault();
          if (!title || !body || !user) {
            setErr(true);
          } else {
            setErr(false);
            postJournal(title, body);
          }
        }}
      >
        Post
      </button>
    </div>
  );
};
