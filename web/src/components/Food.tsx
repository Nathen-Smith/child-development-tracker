import React, { useState, useEffect } from "react";
import { useUser } from "reactfire";
import axios from "../axios";

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const Food = () => {
  const { data: user } = useUser();
  const [time, setTime] = useState("");
  const [comments, setComments] = useState("");
  const [activeSelections, setActiveSelections] = useState<string[]>([]);
  const [options, setOptions] = useState([
    { name: "Milk", active: false },
    { name: "Formula", active: false },
    { name: "Dairy", active: false },
    { name: "Fruit", active: false },
    { name: "Meat", active: false },
    { name: "Bread", active: false },
    { name: "Juice", active: false },
  ]);
  const [errMessage, setErrMessage] = useState("");

  const updateFieldChanged = (index: number) => {
    let newArr = [...options]; // copying the old datas array
    newArr[index].active = !newArr[index].active;
    setOptions(newArr);
  };

  useEffect(() => {
    let activeSelections = new Array<string>();
    let len = options.length;
    while (len--) {
      if (options[len].active) {
        activeSelections.push(options[len].name);
      }
    }
    console.log(activeSelections);
    options && setActiveSelections(activeSelections);
  }, [options]);

  async function postEntry(foods: string[], timeInput: string, notes: string) {
    if (!user) return;
    setErrMessage("");
    // creating Date from string
    const split = timeInput.split(":");
    if (split.length < 2) {
      setErrMessage("Time can't be parsed");
      return;
    }
    const hours = parseInt(split[0]);
    const minutes = parseInt(split[1]);
    if (isNaN(hours) || isNaN(minutes)) {
      setErrMessage("Time can't be parsed");
      return;
    }

    const time = new Date(0, 0, 0, hours, minutes);

    const entry = {
      typesOfFood: foods,
      time: time,
      notes: notes,
      email: user.email,
    };

    try {
      await axios.post("/food", entry);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <div className="w-1/2">
        <p
          className="relative text-lg whitespace-nowrap truncate overflow-hidden mr-12 mb-2"
          style={{ width: "240px" }}
        >
          Type Of Food
        </p>
        {errMessage && <div className="text-red-500">{errMessage}</div>}

        <div className="flex flex-row justify-between">
          <div>
            {options.map((option, idx) => {
              return (
                <label className="flex inline-flex items-center pr-2" key={idx}>
                  <button
                    onClick={() => {
                      updateFieldChanged(idx);
                    }}
                    className={classNames(
                      option.active
                        ? "bg-blue-500 hover:bg-blue-700 text-white"
                        : "bg-transparent text-blue-700  border border-blue-500",
                      " font-semibold py-2 px-2 rounded"
                    )}
                  >
                    <span className="mx-2">{option.name}</span>
                  </button>
                </label>
              );
            })}
          </div>
        </div>
        <p
          className="relative text-lg whitespace-nowrap truncate overflow-hidden mr-12 mb-2 mt-6"
          style={{ width: "240px" }}
        >
          Time of Feeding
        </p>

        <input
          className="border w-1/3 block h-10 rounded"
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="HH:MM"
        />
        <p
          className="relative text-lg whitespace-nowrap truncate overflow-hidden mr-12 mb-2 mt-6"
          style={{ width: "240px" }}
        >
          {"Notes & Comments"}
        </p>
        <textarea
          className="border w-full h-1/4 block"
          rows={5}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <button
          onClick={async (e) => {
            e.preventDefault();
            if (activeSelections.length === 0 || !time || !comments) {
              setErrMessage("Must fill out all fields");
              return;
            }
            postEntry(activeSelections, time, comments);
          }}
          className={
            "w-20 bg-blue-500 text-white  border border-blue-500 font-semibold py-2 px-2 rounded"
          }
        >
          <span className="mx-2">Post</span>
        </button>
      </div>
    </div>
  );
};
