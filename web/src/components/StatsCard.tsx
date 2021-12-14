import React from "react";

import Badge from "react-bootstrap/Badge";
import ProgressBar from "react-bootstrap/ProgressBar";

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

      <ProgressBar now={50} label={`${50}%`} variant={color} />
      {/* <p className="-mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Maxime quisquam vero adipisci beatae voluptas dolor ame.</p> */}
    </div>
  );
};
