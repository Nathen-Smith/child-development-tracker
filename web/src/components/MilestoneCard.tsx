import "./App.css";
import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../axios";
import { useUser } from "reactfire";

interface MilestonesCardProps {
  name?: string;
  index?: number;
  milestoneName: string;
  timeline: number;
}

export const MilestoneCard: React.FC<MilestonesCardProps> = ({
  name,
  index,
  milestoneName,
  timeline,
}) => {
  const { data: user } = useUser();
  const [hasBeenCompleted, setHasBeenCompleted] = useState(false);
  useEffect(() => {
    async function getMilestones() {
      try {
        const milestoneParams = {
          where: `{"title":"${milestoneName}", "timeline":"${timeline}","email": "${user?.email}"}`,
        };
        const milestoneRes = await axios.get("/milestone", {
          params: milestoneParams,
        });
        setHasBeenCompleted(milestoneRes.data.data.length > 0);
      } catch (err) {
        console.log(err);
      }
    }
    user && getMilestones();
  }, [milestoneName, timeline, user]);

  async function postMilestone() {
    try {
      await axios.post("/milestone", {
        title: milestoneName,
        timeline: timeline,
        email: user?.email,
      });
      setHasBeenCompleted(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg mr-12 ml-12">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p
              className="relative text-xl"
              style={{
                display: "block",
                overflow: "auto",
                width: "80%",
                height: "10vh",
              }}
            >
              {milestoneName}
            </p>
            {hasBeenCompleted ? (
              <button
                className="h-10 px-6 font-semibold rounded-md bg-indigo-700 text-white"
                type="submit"
              >
                Done
              </button>
            ) : (
              <button
                className="h-10 px-6 font-semibold rounded-md border border-gray-200 text-gray-900 ml-6"
                type="submit"
                onClick={postMilestone}
              >
                Complete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

//   export ContextCard;
