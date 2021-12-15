import axios from "axios";
import React from "react";

import Badge from "react-bootstrap/Badge";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useUser } from "reactfire";
import { useState } from "react";
import { MilestonesData } from './MilestonesData';

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

  // useEffect(() => {
  //   console.log(
  //     'http://localhost:8080/api/journal?where={"email": "alz3@illinois.edu"}'
  //   );
  //   axios
  //     .get(
  //       'http://localhost:8080/api/journal?where={"email": "alz3@illinois.edu"}'
  //     )
  //     .then(function (response) {
  //       // setdataValue(response.data);
  //       console.log(response.data["data"]);
  //       setDataValue(response.data["data"]);
  //       console.log("dataValue");
  //       // console.log(dataValue)

  //       // setIdNumber(response.data.id)
  //       // console.log(idNumber)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [props.name]);

  const {data: user} = useUser();
  const [progress, setProgress] = useState<number>(0);

  async function getProgress() {
    if (!user) return;
    const total = MilestonesData.filter(m => m.timeline === timeline && m.category === name).length;
    try {
      const response = await axios.get(`/milestones?where={"email": ${user.email}, "timeline": ${timeline}, "category": ${name}}&count=true`);
      if (response.status !== 200) throw "GET failed";
      // 
      setProgress(100 * (response.data.data) / total);
    } catch (e) {
      console.log(e);
    }
  }

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

      <ProgressBar now={50} label={`${50}%`} variant={color} />
      {/* <p className="-mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Maxime quisquam vero adipisci beatae voluptas dolor ame.</p> */}

      {/* <ProgressBar now={50} label={`${50}%`} variant={color} /> */}
      {/* <p className="-mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Maxime quisquam vero adipisci beatae voluptas dolor ame.</p> */}
    </div>
  );
};
