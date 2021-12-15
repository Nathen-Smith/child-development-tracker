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
    <form className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mx-2 space-y-3">
      <div className="flex flex-1 flex-row justify-between align-center">
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-gray-900 mt-12 ml-12">
            Child Development Monitor
          </h1>
          <h1 className="text-lg font-regular text-gray-900 ml-12 ">
            New Journal Entry
          </h1>
        </div>

        <button
          className="h-10 px-6 font-semibold rounded-md border border-gray-200 text-gray-900 mr-6 mt-12"
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
      {err && <div className="text-red-500">Must fill out all fields</div>}

      <form className="w-full ml-12 mt-12">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Title
            </label>

            <input
              className="flex md:w-1/2 lg:w-1/2appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />

            {/* <input id="grid-last-name" type="text" placeholder="Doe"> */}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Entry
            </label>

            {/* <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              /> */}

            <textarea
              className="flex md:w-1/2 lg:w-3/4 h-96 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              rows={5}
              value={body}
              onChange={(event) => setBody(event.target.value)}
            />

            {/* <input id="grid-last-name" type="text" placeholder="Doe"> */}
          </div>
        </div>
      </form>
    </form>
  );
};
