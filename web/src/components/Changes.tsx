import React, { useState } from "react";
import { useUser } from "reactfire";
import axios from "../axios";
import { ChangesEntries } from "./ChangesEntries";

import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const options = [
  {
    id: 1,
    name: "Wet",
  },
  {
    id: 2,
    name: "Dry",
  },
];

export const Changes = () => {
  const { data: user } = useUser();
  const [time, setTime] = useState("");
  const [comments, setComments] = useState("");
  const [selected, setSelected] = useState(options[0]);
  const [entriesShouldUpdate, setEntriesShouldUpdate] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  async function postEntry() {
    if (!user) return;
    setErrMessage(""); //reset error message

    const dateCheck = Date.parse(time);
    if (isNaN(dateCheck)) {
      console.log(dateCheck);
      setErrMessage("Invalid Date");
      return;
    }

    const entry = {
      consistency: selected.name,
      time: new Date(time),
      notes: comments,
      email: user.email,
    };

    try {
      await axios.post("/changes", entry);
      setComments("");
      setTime("");
      setEntriesShouldUpdate(!entriesShouldUpdate); // force rerender
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="grid grid-cols-2 max-w-7xl mx-auto content-between">
      <div className="flex flex-col ">
        <div className="max-w-lg w-sm">
          <p
            className="font-semibold relative text-lg whitespace-nowrap truncate overflow-hidden mr-12 mb-2"
            style={{ width: "240px" }}
          >
            Changes
          </p>

          {errMessage && <div className="text-red-500">{errMessage}</div>}

          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <Listbox.Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Consistency
                </Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="relative w-1/3 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">
                        {selected.name}
                      </span>
                    </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-1/3 bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {options.map((option) => (
                        <Listbox.Option
                          key={option.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-white bg-indigo-600"
                                : "text-gray-900",
                              "cursor-default select-none relative py-2 pl-3 pr-9"
                            )
                          }
                          value={option}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "ml-3 block truncate"
                                  )}
                                >
                                  {option.name}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>

          <label className="mt-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Time of Change (YYYY-MM-DD HH:MM)
          </label>

          <input
            className="flex md:w-1/2 lg:w-1/2appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="YYYY-MM-DD HH:MM"
          />
          <label className="mt-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            {"Notes & Comments (optional)"}
          </label>
          <textarea
            className="flex w-full appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            rows={3}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <button
            onClick={async (e) => {
              e.preventDefault();
              if (!time) {
                setErrMessage("Must fill out time of change");
                return;
              }
              postEntry();
            }}
            className={
              "w-20 bg-indigo-600 text-white  border border-indigo-600 font-semibold py-2 px-2 rounded"
            }
          >
            <span className="mx-2">Post</span>
          </button>
        </div>
      </div>
      <ChangesEntries update={entriesShouldUpdate} />
    </div>
  );
};
