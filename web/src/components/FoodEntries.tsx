import { useEffect, useState } from "react";
import axios from "../axios";
import { useUser } from "reactfire";
import { JournalCard } from "./journal/JournalCard";

export interface FoodArrProps extends Array<FoodProps> {}

export interface FoodProps {
  typesOfFood: string[];
  hour: number;
  minutes: number;
  notes?: string;
  email: string;
  createdAt: string;
}

interface FoodEntriesShouldUpdate {
  update: boolean;
}

export function convertTime(hour: number, minutes: number) {
  return `${hour < 10 ? "0" + hour.toString() : hour}:${
    minutes < 10 ? "0" + minutes.toString() : minutes
  }`;
}

export const FoodEntries: React.FC<FoodEntriesShouldUpdate> = ({ update }) => {
  const { data: user } = useUser();
  const [foodEntries, setFoodEntries] = useState<FoodArrProps>();

  useEffect(() => {
    async function getUserData() {
      try {
        const userParams = {
          where: `{"email": "${user?.email}"}`,
          sort: `{"createdAt" : "-1"}`,
          limit: 10,
        };
        const foodRes = await axios.get("/food", { params: userParams });
        setFoodEntries(foodRes.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    user && getUserData();
  }, [user, update]);

  return (
    <div className="overflow-scroll pt-12" style={{ height: "88vh" }}>
      {foodEntries?.map(
        ({ typesOfFood, createdAt, hour, minutes, notes }, idx) => {
          return (
            <JournalCard
              body={`${convertTime(hour, minutes)} ${
                notes ? `Notes: ${notes}` : ""
              }`}
              title={typesOfFood.join(", ")}
              createdAt={createdAt}
              key={idx}
            />
          );
        }
      )}
    </div>
  );
};
