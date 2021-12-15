import { useEffect, useState } from "react";
import axios from "../axios";
import { useUser } from "reactfire";
import { JournalCard } from "./journal/JournalCard";

export interface FoodArrProps extends Array<FoodProps> {}

export interface FoodProps {
  typesOfFood: string[];
  time: Date;
  email: string;
  createdAt: string;
}

// typesOfFood: { type: [String], required: true },
//     time: { type: Date, required: true },
//     notes: { type: String, required: true },
//     email: { type: String, required: true },
//     createdAt: {type: Date, default: Date.now}

export const FoodEntries = () => {
  const { data: user } = useUser();
  const [foodEntries, setFoodEntries] = useState<FoodArrProps>();

  useEffect(() => {
    async function getUserData() {
      try {
        const userParams = { where: `{"email": "${user?.email}"}` };
        const foodRes = await axios.get("/food", { params: userParams });
        setFoodEntries(foodRes.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    user && getUserData();
  }, [user]);

  return (
    <div className="overflow-scroll pt-12" style={{ height: "88vh" }}>
      {foodEntries?.map(({ typesOfFood, createdAt, time }, idx) => {
        return (
          <JournalCard
            body={}
            title={typesOfFood.join()}
            createdAt={createdAt}
            key={idx}
          />
        );
      })}
    </div>
  );
};
