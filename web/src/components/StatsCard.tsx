import React from "react";

import Badge from "react-bootstrap/Badge";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useUser } from "reactfire";
import { useState } from "react";
import { MilestonesData } from "./MilestonesData";
import { useEffect } from "react";

import axios from "../axios";

interface StatsCardProps {
  name: string;
  index?: number;
  color: string;
  timeline: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  name,
  color,
  timeline,
}) => {
  // const [dataValue, setDataValue] = useState([]);
  const { data: user } = useUser();
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    async function getProgress() {
      const total = MilestonesData.filter(
        (m) => m.timeline === timeline && m.category === name
      ).length;
      try {
        const response = await axios.get(
          `/milestone?where={"email": "${
            user!.email
          }", "timeline": ${timeline}, "category": "${name}"}&count=true`
        );
        if (response.status !== 200) throw new Error("GET failed");
        setProgress((100 * response.data.data) / total);
      } catch (e) {
        console.log(e);
      }
    }
    user && getProgress();
  });

  return (
    <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p
              className="relative text-xl whitespace-nowrap truncate overflow-hidden mr-12"
              style={{ width: "240px" }}
            >
              {name}
            </p>
            <Badge style={{ height: "20px" }} className="mt-6 ml-6" bg={color}>
              {timeline + " months"}
            </Badge>
          </div>
        </div>
      </div>

      <ProgressBar
        now={parseInt(progress.toFixed(2))}
        label={`${parseInt(progress.toFixed(2))}%`}
        variant={color}
      />
      {/* <p className="-mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Maxime quisquam vero adipisci beatae voluptas dolor ame.</p> */}

      {/* <ProgressBar now={50} label={`${50}%`} variant={color} /> */}
      {/* <p className="-mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Maxime quisquam vero adipisci beatae voluptas dolor ame.</p> */}
    </div>
  );
};
